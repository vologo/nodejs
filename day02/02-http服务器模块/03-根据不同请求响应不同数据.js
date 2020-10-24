//1.导入模块
const http = require('http');
//2.创建服务器
let server =  http.createServer((req,res)=>{
    console.log(req.url);
    //需求： 如果请求路径是/ ,响应  index   如果请求路径是/login,响应 登录页
    if(req.url == '/'){
        res.end('index.html');
    }else if(req.url == '/login'){

        //设置响应头解决中文乱码问题： 响应头作用：告诉浏览器我返回给你的数据是什么类型
        /*第一个参数：状态码
        第二个：响应头 
         */
        res.writeHead(200,{
            'Content-Type': 'text/plain;charset=utf-8'// text/plain 普通文本
        });
        res.end('登录页');
    }else{
        res.end('404 not found');
    };

});

//3.开启服务器
server.listen(3000,()=>{
    console.log('服务器开启成功');
    
});