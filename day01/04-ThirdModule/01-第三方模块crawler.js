//1.导入模块
var Crawler = require("crawler");

//2.创建爬虫对象
var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        //爬好之后会执行这个回调函数
        if(error){
            console.log(error);
        }else{
            //将爬好的数据赋值给juqery对象
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($("html").html());
            //使用jquery的语法来解析页面
            console.log($('#lg>img').attr('src'));  
        }
        done();
    }
});
 
// Queue just one URL, with default callback
//3.开始爬虫
c.queue('https://www.cyberpunk.net/cn/zh-cn/');