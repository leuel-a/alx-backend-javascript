const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    const dataArr = data
      .split(/\r\n/)
      .slice(1)
      .filter((line) => line);
    const students = dataArr.map((line) => line.split(','));
    const fields = new Map();

    for (const student of students) {
      const field = student[3];
      if (!fields.has(field)) fields.set(field, []);
      fields.get(field).push(student[0]);
    }

    // TODO: Iterate over the fields Map object and print the number of students per field
    console.log(`Number of students: ${students.length}`);
    for (const [field, value] of fields) {
      console.log(
        `Number of students in ${field}: ${value.length}. List: ${value.join(
          ', ',
        )}`,
      );
    }
  } catch (err) {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
