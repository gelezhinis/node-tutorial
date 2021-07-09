const fs = require('fs');

const {readFileSync, writeFileSync} = fs;

console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);

writeFileSync(
   './content/third.txt', 
   `Hello again, this is me again! Here is result of previuos two files: ${first}, ${second}`,
   {flag: 'a'}
);

console.log('done with this task');
console.log('starting the next one');

