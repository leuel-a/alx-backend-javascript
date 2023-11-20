const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin, output: process.stdout, terminal: false,
});

console.log('Welcome to Holberton School, what is your name?');

rl.on('line', (line) => {
  console.log(`Your name is: ${line}`);
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
