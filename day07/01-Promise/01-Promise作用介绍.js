/* 
为什么要学习Promise？

1.Promise作用 ： 解决回调地狱问题
    回调地狱 ： 异步回调 层层嵌套
*/

//需求： 依次读取 文件  a.txt , b.txt , c.txt 这三个文件内容
const fs = require('fs');

//（1）能直接按照顺序写吗？  : 不能，因为异步操作 是无序的
fs.readFile("./data/a.txt", 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    };
});

fs.readFile("./data/b.txt", 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    };
});

fs.readFile("./data/c.txt", 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    };
});


//（2）解决方案 ： 在回调函数中嵌套执行
//弊端 ： 形成回调地狱（异步回调 层层嵌套，非常麻烦且不便于维护）
//读取文件A
fs.readFile("./data/a.txt", 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
        //A读取成功之后开始读取B
        fs.readFile("./data/b.txt", 'utf-8', (err, data) => {
            if(err){
                console.log(err);
            }else{
                console.log(data);
                //B读取成功之后开始读取C
                fs.readFile("./data/c.txt", 'utf-8', (err, data) => {
                    if(err){
                        console.log(err);
                    }else{
                        console.log(data);
                    }
                });
            }
        });
    }
});
