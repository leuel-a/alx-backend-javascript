const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').replace(/\r/gm, '');
    const dataArr = data.split('\n').slice(1);
    const students = dataArr
      .map((row) => row.split(','))
      .filter((student) => student.length > 0 && student[0] !== '');

    const fields = new Map();
    for (const student of students) {
      fields.set(student[3], (fields.get(student[3]) || []).concat(student[0]));
    }

    console.log(`Number of students: ${students.length}`);
    fields.forEach((value, key) => {
      console.log(
        `Number of students in ${key}: ${value.length}. List: ${value.join(
          ', ',
        )}`,
      );
    });
  } catch (err) {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
