//1.导入模块
const fs = require('fs');


// 1. 
/*node编译器执行流程:
    0.js从上往下解析代码流程
    1.判断是同步还是异步

    // 2.如果是同步，则立即加入主线程执行
    // 3.如果是异步，则不加入主线程执行，而是放入事件循环队列中(Event Loop)
    
    4.所有代码解析完毕之后，开始执行事件循环中的异步代码

    注意:
    实质上, 不管是同步还是异步代码都会被解析, 区别在解析到是否发现有回调函数, 有则是异步, 并加入事件循环队列中
    fs.readFile('','',()=>{});
    前面的'' '' 都会被解析, 到后面的()=>{} 发现是异步的回调函数, 才加入事件循环队列中

*/


// 2. 
/*异步操作: 
1.不会阻塞线程（性能高）
2.无序执行
3.有回调函数 
 */

//异步操作
// console.log('55555555');
// fs.readFile('./data/aaa.txt','utf8',(err,data)=>{
//     console.log('1111111');

//     if(err){
//         throw err;
//     }else{
//         // console.log(data); 
//     };
// });


// console.log('666666');
// fs.readFile('./data/aaa.txt','utf8',(err,data)=>{
//     console.log('222222');

//     if(err){
//         throw err;
//     }else{
//         // console.log(data); 
//     };
// });

// console.log('777777');
// fs.readFile('./data/aaa.txt','utf8',(err,data)=>{
//     console.log('333333');

//     if(err){
//         throw err;
//     }else{
//         // console.log(data); 
//     };
// });

// console.log('8888888');
// fs.readFile('./data/aaa.txt','utf8',(err,data)=>{
//     console.log('4444444');

//     if(err){
//         throw err;
//     }else{
//         // console.log(data); 
//     };
// });


// 3. 
//同步操作
/*  1.会阻塞线程（性能低）
    2.有序执行
    3.没有回调函数

 */


// 2.1 读文件(有返回值)
let data1 = fs.readFileSync('./data/aaa.txt', 'utf8');
console.log(data1);
console.log('11111');

let data2 = fs.readFileSync('./data/aaa.txt', 'utf8');
console.log('22222');
console.log(data2);

let data3 = fs.readFileSync('./data/aaa.txt', 'utf8');
console.log('33333');
console.log(data3);


let data4 = fs.readFileSync('./data/aaa.txt', 'utf8');
console.log('44444');
console.log(data4);
