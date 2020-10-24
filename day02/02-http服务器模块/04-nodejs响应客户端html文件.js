//1.导入模块
const http = require('http');
const fs = require('fs');


//2.创建服务器
let server =  http.createServer((req,res)=>{
    //需求：  如果请求路径是 / 返回首页html  如果是login返回登录html

    //1.获取客户端请求路径
    let url = req.url;

    //2.处理请求
    //一般如果响应的是文件，不需要设置响应头，直接返回二进制数据。浏览器会自动识别数据类型并且加载
    if(url == '/'){
        //响应首页
        fs.readFile('./data/index.html',(err,data)=>{
            if(err){
                throw err;
            }else{
                console.log(data);
                //3，将读取好的文件数据响应给客户端
                res.end(data);
            };
        });
    }else if(url == '/login'){
        //响应登录页
        fs.readFile('./data/login.html',(err,data)=>{
            if(err){
                throw err;
            }else{
                //3，将读取好的文件数据响应给客户端
                res.end(data);
            };
        });
    }else{
        res.end('404 not found');
    }
});

//3.开启服务器
server.listen(3000,()=>{
    console.log('服务器开启成功');
    
});