const fs = require("fs");

/* 
1. promise实例对象的race方法 ： 将多个Promise合并成一个Promise
    * 任何一个异步  执行完毕就会执行then方法

2. 解决需求： a , b , c 任意一个成功
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
let pAll = Promise.race([pa,pb,pc]);

//开始读取a
// 三个promise任何一个成功,就去执行pAll.then的第一个方法.  （一旦成功一个，其他不再执行）
// 三个全部失败,就去执行catch里面的函数.
pAll.then((data)=>{
    console.log(data);//data是第一个执行成功的primise异步结果
}).catch((err)=>{
    console.log(err);
});
