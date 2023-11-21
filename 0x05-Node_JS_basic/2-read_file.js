const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf8' });
    const dataArr = data
      .split(/\r\n/)
      .slice(1)
      .filter((line) => line && !line.match(/^,+$|^\s+$/));
    const students = dataArr.map((line) => line.split(','));
    const fields = {};

    for (const student of students) {
      if (student[3] in fields === false) fields[student[3]] = [];

      fields[student[3]] = [...fields[student[3]], student[0]];
    }

    const fieldsKeys = Object.keys(fields);

    console.log(`Number of students: ${students.length}`);
    fieldsKeys.forEach((key) => {
      const val = fields[key];
      console.log(
        `Number of students in ${key}: ${val.length}. List: ${val.join(', ')}`,
      );
    });
  } catch (err) {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
