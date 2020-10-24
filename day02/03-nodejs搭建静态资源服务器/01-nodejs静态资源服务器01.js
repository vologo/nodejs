/*WEB开发特点1：html中所有外部资源路径都会变成网络请求
*/

//1.导入模块
//http模块
const http = require('http');
//fs文件模块
const fs = require('fs');
//path路径模块
const path = require('path');


//2.创建服务器
let server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url == '/') {
        //读取文件响应给客户端
        fs.readFile(path.join(__dirname, 'www',  'index.html'), (err, data) => {
            if (err) {
                throw err;//如果读取失败，抛出异常
            } else {
                res.end(data);//如果读成功，响应给客户端
            }
        });
    } else if (req.url == '/resource/css/index.css') {
        //读取文件响应给客户端
        fs.readFile(path.join(__dirname, 'www','resource', 'css', 'index.css'), (err, data) => {
            if (err) {
                throw err;//如果读取失败，抛出异常
            } else {
                res.end(data);//如果读成功，响应给客户端
            }
        });
    } else if (req.url == '/resource/images/01.gif') {
        //读取文件响应给客户端
        fs.readFile(path.join(__dirname, 'www','resource', 'images', '01.gif'), (err, data) => {
            if (err) {
                throw err;//如果读取失败，抛出异常
            } else {
                res.end(data);//如果读成功，响应给客户端
            }
        });
    } else if (req.url == '/resource/images/01.jpg') {
        //读取文件响应给客户端
        fs.readFile(path.join(__dirname, 'www','resource', 'images', '01.jpg'), (err, data) => {
            if (err) {
                throw err;//如果读取失败，抛出异常
            } else {
                res.end(data);//如果读成功，响应给客户端
            }
        });
    } else if (req.url == '/resource/video.mp4') {
        //读取文件响应给客户端
        fs.readFile(path.join(__dirname, 'www','resource', 'video.mp4'), (err, data) => {
            if (err) {
                throw err;//如果读取失败，抛出异常
            } else {
                res.end(data);//如果读成功，响应给客户端
            }
        });
    } else if (req.url == '/resource/favicon.ico') {
        //读取文件响应给客户端
        fs.readFile(path.join(__dirname, 'www','resource', 'favicon.ico'), (err, data) => {
            if (err) {
                throw err;//如果读取失败，抛出异常
            } else {
                res.end(data);//如果读成功，响应给客户端
            }
        });
    } else {
        res.end('404 not found');
    };
});

//3.开启服务器
server.listen(3000, () => {
    console.log('服务器启动成功');
});