const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.setHeader('Content-Type', 'text/plain')
    const originalConsoleLog = console.log;

    const captures = ['This is the list of our students'];
    console.log = (message) => {
      captures.push(message);
    };

    try {
      await countStudents('database.csv');
    } catch (error) {
      captures.push(error);
    }
    console.log = originalConsoleLog;
    res.end(captures.join('\n'));
  }
});

app.listen(1245);

module.exports = app;
