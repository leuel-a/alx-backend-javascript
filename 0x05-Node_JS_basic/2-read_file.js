const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').replace(/\r/gm, '');
    const dataArr = data.split('\n');
    const students = dataArr.map((item) => item.split(','))
      .filter((item) => item.length === 4).slice(1);

    const CS = students.filter((item) => item[3] === 'CS')
      .map((student) => student[0]);
    const SWE = students.filter((item) => item[3] === 'SWE')
      .map((student) => student[0]);

    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
    console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
  } catch (err) {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
