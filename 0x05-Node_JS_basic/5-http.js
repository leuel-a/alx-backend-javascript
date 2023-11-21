const fs = require('fs');
const http = require('http');

const fileName = process.argv[2];

function getStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        return reject(Error('Cannot load the database'));
      }
      return resolve(data);
    });
  });
}

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      // This is the line that will call the function that returns a promise
      const data = await getStudents(fileName);

      const lines = data.split(/\r?\n/).filter((line) => line);

      if (lines.length === 0) {
        res.end('The database is empty');
      }

      // Remove the header
      const students = lines.slice(1);

      if (students.length === 0) {
        res.end('Number of students: 0');
      }

      const fieldCounts = new Map();
      students.forEach((student) => {
        const [firstName, , , field] = student.split(',');

        if (!fieldCounts.has(field)) {
          fieldCounts.set(field, [firstName]);
        } else {
          fieldCounts.get(field).push(firstName);
        }
      });

      res.write(`Number of students: ${students.length}\n`);

      const fieldEntries = Array.from(fieldCounts.entries());
      fieldEntries.forEach(([field, students], index) => {
        const line = `Number of students in ${field}: ${
          students.length
        }. List: ${students.join(', ')}`;
        if (index < fieldEntries.length - 1) {
          res.write(`${line}\n`);
        } else {
          res.write(line); // No newline character for the last line
        }
      });
      res.end();
    } catch (error) {
      res.end('Cannot load the database');
    }
  }
});

app.listen(1245);

module.exports = app;
