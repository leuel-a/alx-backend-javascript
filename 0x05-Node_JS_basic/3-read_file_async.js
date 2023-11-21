const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        return reject(Error('Cannot load the database'));
      }
      const lines = data.split(/\r?\n/).filter((line) => line);

      if (lines.length === 0) {
        return reject(Error('The database is empty'));
      }

      // Remove the header
      const students = lines.slice(1);

      if (students.length === 0) {
        console.log('Number of students: 0');
        return reject(Error('No students in the database'));
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

      console.log(`Number of students: ${students.length}`);

      fieldCounts.forEach((students, field) => {
        console.log(
          `Number of students in ${field}: ${
            students.length
          }. List: ${students.join(', ')}`,
        );
      });

      return resolve();
    });
  });
}

module.exports = countStudents;
