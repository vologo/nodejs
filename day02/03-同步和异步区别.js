const { LOADIPHLPAPI } = require('dns');
const fs = require('fs');


// 同步和异步
// 1. 异步
// fs.readFile('./aaa.txt', 'utf-8', (err, data) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log(data);
//     }
// })

// console.log('111');


// 2. 异步
console.log(fs.readFileSync('./aaa.txt', 'utf-8'));;

console.log('222');


fs.writeFileSync('./ccc.txt', '举头望明月');
console.log('12345');
