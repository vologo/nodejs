/**
 * 1.promise对象有三个状态.
    a. pending（进行中）
    b. fulfilled（已成功）
    c. rejected（已失败）
 
 * 2.Promise对象的状态改变， 只有两种可能：
    a. 从pending变为fulfilled
        * 此时应该执行 resolve();
    b. 从pending变为rejected。
        * 此时应该执行 reject();
 
 * 3.promise在创建对象的时候,里面的代码会执行.
    a. promise创建时，里面的代码还是异步无序操作
    b. promise的原理是，利用then方法将异步操作的结果 按照顺序执行
    *** 总结： 不要在创建promise的时候去处理异步操作结果，而应该通过 then() 方法来处理 ***

 * 4.promise解决回调地狱原理 ： 在then方法中返回一个promise对象
    *** 在上一个promise的then方法中，返回下一个promise ***

 * 5.坤哥结语 ： promise本质 不是控制异步代码的执行顺序（无法控制） ， 而是控制异步代码结果处理的顺序
*/

const fs = require('fs');

//(1) 创建三个异步操作  promise

//读取文件A
const p1 = new Promise((resolve,reject)=>{
    //读文件
    fs.readFile('./data/a.txt','utf8',(err,data)=>{
       if(err == null){ 
            //成功
           resolve(data);
       }else {
           //失败
           reject(err); 
       }
    });
});

//读取文件B
const p2 = new Promise((resolve,reject)=>{
    //读文件
    fs.readFile('./data/b.txt','utf8',(err,data)=>{
       if(err == null){ 
            //成功
           resolve(data);
       }else {
           //失败
           reject(err); 
       }
    });
});

//读取文件C
const p3 = new Promise((resolve,reject)=>{
    //读文件
    fs.readFile('./data/c.txt','utf8',(err,data)=>{
       if(err == null){ 
            //成功
           resolve(data);
       }else {
           //失败
           reject(err); 
       }
    });
});

// (2)按照顺序处理异步操作结果
p1.then((data)=>{//第一个异步结果
    console.log(data);
    return p2;//返回下一个promise
}).then((data)=>{ // 第二个异步结果  （由于p1.then方法返回的是p2，而p2也有自己的then，所以可以继续调用p2的then方法）
    console.log(data);
    return p3;//返回下一个promise
}).then((data)=>{ // 第三个异步结果  
    console.log(data);
});

