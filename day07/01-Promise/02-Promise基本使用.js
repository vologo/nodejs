/* 
1.Promise是一个构造函数 ， 返回一个Promise对象
2.使用流程
    (1)实例化Promise对象 ： 将异步操作放入Promise中
    (2)调用then() 方法： 处理异步操作结果
*/

const fs = require('fs');
/** 1. 实例化Promise
* @description:实例化Promise
* @param {Function}  (resolve：成功处理函数,reject：失败处理函数)=>{ 异步操作代码 }
* @return: Promise对象
*/
 const p1 = new Promise((resolve,reject)=>{
     //读文件
     fs.readFile('./data/a.txt','utf8',(err,data)=>{
        if(err == null){ 
            /* 
            (1)异步操作成功，则执行 resolvce()
            (2)resolve会把把promise对象的状态从 pending进行中 改为 fulfilled成功
            (3)该方法本质是调用 then() 中的第一个方法
            */
            resolve(data);
        }else {
            /* 
            (1)异步操作失败，则执行 reject()
            (2)reject会把把promise对象的状态从 pending进行中 改为 rejected失败
            (3)该方法本质是调用 then() 中的第二个方法
            */
            reject(err); 
        }
     });
 });

 /* 2. p1.then() : 处理异步操作结果 */
 p1.then((data)=>{
    //成功了,打印文件数据
    console.log(data);
 },(err)=>{
    //失败了,打印错误信息
    console.log(err);
 });