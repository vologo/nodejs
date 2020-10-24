var Crawler = require("crawler");
var fs = require('fs');
 
var c = new Crawler({
    encoding:null,
    jQuery:false,// set false to suppress warning message.
    callback:function(err, res, done){
        if(err){
            console.error(err.stack);
        }else{
            //将爬取好的文件通过fs模块写入文件
            fs.createWriteStream(res.options.filename).write(res.body);
        }
        
        done();
    }
});
 
//绝大多数网站，都有反爬机制。只有小众网站没有
//浏览器可以下载，但是服务端爬虫无效。反爬：检测你这个请求是通过浏览器发出来，还是服务端（解决方案：让服务端伪装成浏览器来发这个请求）
c.queue({
    url:"http://upos-hz-mirrorks3u.acgvideo.com/upgcxcode/75/11/112251175/112251175-1-6.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq99M=&uipk=5&nbs=1&deadline=1571396695&gen=playurl&os=ks3u&oi=2005998532&trid=a4c624adafe64ababb2a851334eaf87eh&platform=html5&upsig=2a29cd105837278e3b4c92181fe3eb59&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=0",
    filename:"./video/11111.mp4",//写入文件名 默认在根目录
    headers:{'User-Agent': 'requests'}//让服务端伪装成客户端
});