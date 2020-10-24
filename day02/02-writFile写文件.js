const fs = require('fs');

fs.writeFile('./bbb.txt', '你好吗?', 'utf-8', (err) => {
    console.log(err);
    console.log(__dirname);
    console.log(__filename);
    if (err) {
        throw err;

    } else {
      console.log('写入成功');
    }
})