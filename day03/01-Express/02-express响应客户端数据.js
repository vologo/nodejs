//1.导入模块
const express = require('express');

//2.创建服务器
/* express() 相当于http模块的http.createServer() */
let app = express();


//3.接收客户端请求

//文本类型数据
app.get('/',(req,res)=>{
    //响应客户端数据
    res.send('欢迎来到黑马程序员');
});

//json格式数据
app.get('/info',(req,res)=>{
    //响应json : express自动帮我们转换
    res.send({name:'张三'});

    /* 以前的做法
    使用JSON.stringify() : 将js对象转成json字符串
    */
   //res.end(JSON.stringify({name:'张三'}));
});

//文件类型数据
app.get('/login',(req,res)=>{
    //express自动帮我们解析了get请求参数，我们直接通过req.query获取即可
    console.log(req.query);
    res.sendFile(__dirname + '/login.html');
});

//4.开启服务器
app.listen(3000,()=>{
    console.log('服务器启动成功');
});