const fs = require('fs');

const {readFile, writeFile} = fs;

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
   if(err) {
      console.log(err);
      return;
   } 
   const first = result;
   readFile('./content/second.txt', 'utf8', (err, result) => {
      if(err) {
         console.log(err);
         return;
      }
      const second = result;
      writeFile(
         './content/result-async.txt', 
         `Result: ${first} <br> ${second}`,
         (err, result) => {
            if(err) {
               console.log(err);
               return;
            }
            console.log('done with this task');
         }
      )
   })
})
console.log('starting next task');

