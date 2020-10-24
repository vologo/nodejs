const http = require('http');
const url = require('url');


let server = http.createServer((req, res) => {
    console.log(req.url);
    // 接受请求数据
    let query = url.parse(req.url, true);
    // 解析和操作

    // 响应请求数据
    res.end(JSON.stringify(query));

});

server.listen(3000,() => {
    console.log('打开服务器!');
});
