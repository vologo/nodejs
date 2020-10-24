const fs = require('fs');


//1.封装一个函数 ：  根据文件名生成  文件读取的promise
function getPromise(fileName) {
    var p = new Promise((resolve, reject) => {
        //读文件
        fs.readFile(`./data/${fileName}.txt`,'utf-8', (err, data) => {
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

//2.解决需求： 要先读a, 读完a后读b, 读完b后读c.

//开始读取a
getPromise('a').then((data)=>{
    console.log(data);
    //继续读取b
    return getPromise('b');
}).then((data)=>{
    console.log(data);
    //继续读取c
    return getPromise('c');
}).then((data)=>{
    console.log(data);
});//异步回调队列结束
