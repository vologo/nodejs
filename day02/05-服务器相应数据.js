const http = require('http');


let server = http.createServer((err, data) => {
    if (err) {
        throw err;

    } else {
        console.log(data);
    }
});


server.listen(3000, '127.0.0.1', (err) => {
    if (err) {
        throw err;
    } else {
        console.log('服务器开启成功');
    }
});



