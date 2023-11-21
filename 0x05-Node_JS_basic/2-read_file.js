const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    const lines = data.split(/\r?\n/).filter((line) => line);

    const students = lines.slice(1);
    if (students.length === 0) {
      console.log(`Number of students: ${students.length}`);
      return;
    }

    const fieldCounts = new Map();
    students.forEach((line) => {
      const [firstName, , , field] = line.split(',');

      if (fieldCounts.has(field)) {
        fieldCounts.get(field).push(firstName);
      } else {
        fieldCounts.set(field, [firstName]);
      }
    });

    console.log(`Number of students: ${students.length}`);
    fieldCounts.forEach((names, field) => {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(
          ', ',
        )}`,
      );
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
