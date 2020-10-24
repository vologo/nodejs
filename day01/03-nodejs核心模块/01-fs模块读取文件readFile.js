//1.导入文件模块

const fs = require('fs');

//2.读取文件

/**
 * 第一个参数：文件路径
 * 第二个参数：编码格式 （可选参数，默认为buffer二进制）
 * 第三个参数：读取回调操作（异步操作）
    * err:如果读取成功，err为null,  否则读取失败（一般文件路径错误或者找不到文件）
    * data:读取到的数据
 */
fs.readFile('./data/aaa.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
        //抛出异常，throw的作用就是让node程序终止运行，方便调试
        throw err;
    }else{
        console.log(data);
    };
});

console.log('11111');

//3.同步读取文件(了解即可，几乎不用,一般在异步的api后面加上Sync就是同步)

let data = fs.readFileSync('./data/aaa.txt','utf-8');
console.log(data);

console.log('2222');