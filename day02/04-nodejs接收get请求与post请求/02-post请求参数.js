//1.导入模块
const http = require('http');

//querystring：解析post参数
const querystring = require('querystring');

//2.创建服务器
let server = http.createServer((req,res)=>{
    //post请求不是放到url中，而是放到请求体 不能使用解析get请求参数来解析post参数

    /*post请求特点
    1.可以发送很大数据 ，需要很多次发送
    2.浏览器会将post数据切成很多份一点一点发送
    */
   //接收post请求参数流程
   //1.给req注册一个data事件，表示开始准备接收post数据
   var postData = '';
   req.on('data',(chuck)=>{
        //当客户端每发送一次数据流，这个函数会走一次，服务端需要主动将这些数据拼接起来
        //具体多少次，取决于客户端带宽
        postData += chuck;
   });

   //2.给req注册一个end事件。当客户端post数据全部发送完毕之后，这个方法会走一次
   req.on('end',()=>{
       console.log(postData);
        //3.使用querystring模块解析接收完成的post参数数据
       let postObjc = querystring.parse(postData);
       console.log(postObjc);
       //把解析好的post请求参数响应给客户端
       res.end(JSON.stringify(postObjc)); 
   });
    console.log(req.url);
});

//3.开启服务器
server.listen(3000,()=>{
    console.log('success');
});
