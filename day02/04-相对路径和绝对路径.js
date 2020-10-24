const { fstat } = require('fs');
const fs = require('fs');

console.log(__dirname);
console.log(__filename);


let absFile = __dirname + '\\aaa.txt';
console.log(absFile);
// fs.readFile('')