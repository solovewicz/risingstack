// app/index.js

const fs = require('fs');  

var content;  
try {  
  //Blocking Operation
  //so this will run asynchronously
  console.log("Blocking Operation");
  content = fs.readFileSync('file.md', 'utf-8');
} catch (ex) {
  console.log(ex);
}
console.log("Blocking: " + content);  

//non blocking

console.log("Non-Blocking Operation");
fs.readFile('file.md', 'utf-8', function (err, content) {  
    if (err) {
          return console.log(err);
	    }

      console.log("Non-Blocking: " + content);
})


console.log('start reading a file...');

fs.readFile('file.md', 'utf-8', function (err, content) {  
  if (err) {
    console.log('error happened during reading the file');
    return console.log(err);
  }

  console.log(content);
})

console.log('end of the file');  
