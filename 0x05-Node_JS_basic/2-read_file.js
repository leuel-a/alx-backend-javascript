const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
