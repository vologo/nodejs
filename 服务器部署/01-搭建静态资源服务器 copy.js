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
    } else if (req.url == '/resource/css/index.css') {
        fs.readFile(path.join(__dirname, 'www', 'resource', 'css', 'index.css'), (err, data) => {
            if (err) {
                throw err;
            } else {
                res.end(data);

            }
        })

    } else if (req.url == '/resource/images/01.gif') {
        fs.readFile(path.join(__dirname, 'www', 'resource', 'images', '01.gif'), (err, data) => {
            if (err) {
                throw err;
            } else {
                res.end(data);

            }
        })
    } else if (req.url == '/resource/images/01.jpg') {
        fs.readFile(path.join(__dirname, 'www', 'resource', 'images', '01.jpg'), (err, data) => {
            if (err) {
                throw err;
            } else {
                res.end(data);

            }
        })
    } else if (req.url == '/resource/favicon.icon') {
        fs.readFile(path.join(__dirname, 'www', 'resource', 'favicon.icon'), (err, data) => {
            if (err) {
                throw err;
            } else {
                res.end(data);
            }
        });
    } else if (req.url == '/resource/video.mp4') {
        fs.readFile(path.join(__dirname, 'www', 'resource', 'video.mp4'), (err, data) => {
            if (err) {
                throw err;
            } else {
                res.end(data);

            }
        });
    } else {
        res.end('404 not found');
    }
});


server.listen(3000, () => {
    console.log('服务器开启成功!');
})