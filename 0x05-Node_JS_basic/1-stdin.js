const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin, output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?\n');

rl.question('', (ans) => {
  console.log(`Your name is: ${ans}`);
  rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
