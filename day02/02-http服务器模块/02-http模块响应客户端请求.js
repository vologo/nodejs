/* WEB开发本质
    请求
    处理
    响应
*/

//1.导入模块
const http = require('http');
//2.创建服务器
/* 
req:请求对象 负责处理客户端请求
res:响应对象 负责响应客户端请求
*/
let server =  http.createServer((req,res)=>{
    //客户端每发送一个请求，这个函数都会执行一次（执行多次）
    console.log(req.url);
    //响应客户端数据
    res.end('hello world');
});

//3.启动服务器
server.listen(3000,()=>{
    console.log('服务器开启成功');
});