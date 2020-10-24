/*WEB开发特点2：静态资源(图片、文件、音视频)一般使用路径拼接的方式来处理
*/

//1.导入模块
//http模块
const http = require('http');
//fs文件模块
const fs = require('fs');
//path路径模块
const path = require('path');


//2.创建服务器
let server = http.createServer((req,res)=>{
    console.log(req.url);
    
    if(req.url == '/'){
        //读取文件响应给客户端
        fs.readFile(path.join(__dirname,'www','index.html'),(err,data)=>{
            if(err){
                throw err;//如果读取失败，抛出异常
            }else{
                res.end(data);//如果读成功，响应给客户端
            }
        });
    }else if(req.url.indexOf('/resource') == 0){//只要路径以/resource开头，直接拼接返回
        //读取文件响应给客户端
        fs.readFile(path.join(__dirname,'www',req.url),(err,data)=>{
            if(err){
                throw err;//如果读取失败，抛出异常
            }else{
                res.end(data);//如果读成功，响应给客户端
            }
        });
    }else{
        res.end('404 not found');
    };
});

//3.开启服务器
server.listen(3000,()=>{

    console.log('服务器启动成功');
});