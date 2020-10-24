const http = require('http');

let server = http.createServer((req, res) => {
    console.log(req.url);
});

server.listen(3000,'127.0.0.1', (err) => {
    console.log('服务器开启成功!');
})


