const http = require('http');
const fs = require('fs');
const path = require('path');


let server = http.createServer((req, res) => {

    if (req.url == '/') {
        fs.readFile(path.join(__dirname, 'www', 'index.html'), (err, data) => {
            if (err) {
                throw err;
            } else {
                res.end(data);
            }
        })
    } else if (req.url.indexOf('/resource') == 0) {
        fs.readFile(path.join(__dirname, 'www', req.url), (err, data) => {
            if (err) {
                throw err;
            } else {
                res.end(data);
                
          }
      })
    } else {
        res.end('404 not found');
    }
});


server.listen(3000, () => {
    console.log('服务器开启成功!');
})