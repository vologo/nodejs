const fs = require('fs');

fs.readFile('./aaa.txt', 'utf-8', (err, data) => {
    console.log(err);
    // console.log(data);

    if (err) {
        throw err;
    } else {
        console.log(data);
    }
});


