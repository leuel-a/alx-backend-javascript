const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = data
        .split(/\r?\n/)
        .splice(1)
        .map((row) => row.split(','));

      const fields = new Map();
      let count = 0;
      students.forEach((student) => {
        const field = student[3];
        if (field === undefined) return;
        if (!fields.has(field)) {
          fields.set(field, []);
        }
        fields.set(field, [...fields.get(field), student[0]]);
        count += 1;
      });

      console.log(`Number of students: ${count}`);
      fields.forEach((value, key) => {
        const count = value.length;
        console.log(
          `Number of students in ${key}: ${count}. List: ${value.join(', ')}`,
        );
      });
      resolve();
    });
  });
}

module.exports = countStudents;
