//导入模块
const express = require('express');
//创建服务器
let app = express();

/*1.什么是express中间件？： 其实就是一个函数（这个函数有三个参数）
    function(req,res,next){  
        req:请求对象  
        res：响应对象  
        next：下一个中间件 
    }
*/

/*2.express如何使用中间件?: 三种方式  
    app.use('pathname',中间件) :
        pathname不写: 任何请求路径都会执行这个中间件
        pathname写了：任何以pathname开头的请求路径都会执行这个中间件
    app.get('pathname',中间件) :  请求路径为pathname的get请求会执行这个中间件
    app.post('pathname',中间件) :  请求路径为pathname的post请求会执行这个中间件
*/

/* 3.express处理网络请求的流程
    a.从上往下依次匹配请求路径，如果匹配成功则执行该中间件
    b.如果这个中间件中调用了：next() ，则会继续往下匹配
    c.如果所有的中间件都无法匹配，则会自动进入一个兜底的中间件响应返回404 not found错误
*/

app.use('/abc',(req,res,next)=>{
    //污水净化第一步：添加絮凝剂
    console.log(11111);
    req.a = '添加了絮凝剂';
    next();
});


app.use('/abc',(req,res,next)=>{
    //污水净化第二步：添加活性炭
    console.log(22222);
    req.b = '添加活性炭';
    next();
});

app.post('/abc',(req,res,next)=>{
    console.log(33333);
    next();
});

app.get('/abc',(req,res,next)=>{
    console.log(44444);
    //看下污水净化到这一步加了什么
    console.log(req.a);
    console.log(req.b);
    res.send('hello');
});



//express底层有一个默认的兜底中间件，如果上面所有的中间件都无法匹配或者没有结束响应，则会进入这个中间件
//自定义一个兜底中间件，覆盖默认的
app.use((req,res)=>{
    console.log(55555);
    
    res.send('你的路径是不是写错啦');
});



//开启服务器
app.listen(3000, () => {
    console.log('success');
});