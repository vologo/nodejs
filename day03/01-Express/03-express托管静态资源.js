//1.导入模块
const express = require('express');

//2.创建服务器
let app = express();

//托管静态资源（相当于我们之前写的一大坨模拟apache服务器功能代码）
/* 
1.当请求路径为/时，express会自动读取www文件夹中的index.html文件响应返回
2.当路径请求为www文件夹中的静态资源，express会自动拼接文件路径并响应返回
*/
app.use(express.static('www'));

//4.开启服务器
app.listen(3000,()=>{
    console.log('success');  
});