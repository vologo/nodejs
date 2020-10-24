const fs = require("fs");

/* 
1. promise实例对象的all方法 ： 将多个Promise合并成一个Promise
    * 所有异步全部执行完毕才会执行then方法

2. 解决需求： a , b , c 同时执行完毕
*/


//1.封装一个函数 ：  根据文件名生成  文件读取的promise
function getPromise(fileName) {
    var p = new Promise((resolve, reject) => {
        //读文件
        fs.readFile(`./data/${fileName}.txt`, 'utf-8', (err, data) => {
            if (err == null) {
                //成功
                resolve(data);
            } else {
                //失败
                reject(err);
            }
        });
    });
    return p;
};

//2.解决需求： a , b , c 同时执行完毕
let pa = getPromise('a');
let pb = getPromise('b');
let pc = getPromise('c');
//将三个异步操作合并成一个Promise
let pAll = Promise.all([pa,pb,pc]);

//开始读取a
// 三个promise都成功后,才去执行pAll.then的第一个方法.
// 只要有一个失败了,就去执行catch里面的函数.
pAll.then((data)=>{
    console.log(data);//data是一个数组，存储每一个promise的成功结果
}).catch((err)=>{
    console.log(err);
});
