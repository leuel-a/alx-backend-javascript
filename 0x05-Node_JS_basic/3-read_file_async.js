const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      }
      const dataFromFile = fs.readFileSync(path, 'utf8')
          .replace(/\r/gm, ''),
        dataArr = dataFromFile.split('\n'),
        students = dataArr.map((item) => item.split(','))
          .filter((item) => item.length === 4).slice(1),
        CS = students.filter((item) => item[3] === 'CS')
          .map(student => student[0]),
        SWE = students.filter((item) => item[3] === 'SWE')
          .map(student => student[0]);

      console.log(`Number of students: ${students.length}`);
      console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(',')}`);
      console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(',')}`);

      resolve();
    });
  });
}

module.exports = countStudents;
