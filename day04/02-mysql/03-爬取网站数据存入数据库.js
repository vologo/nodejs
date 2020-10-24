//1.导入模块
const Crawler = require("crawler");
const hm = require('mysql-ithm');
//2.连接数据库
//如果数据库存在则连接，不存在则会自动创建数据库
hm.connect({
    host: 'localhost',//数据库地址
    port: '3306',
    user: 'root',//用户名，没有可不填
    password: 'root',//密码，没有可不填
    database: 'cqmanager'//数据库名称
});

//3.创建Model(表格模型：负责增删改查)
//如果table表格存在则连接，不存在则自动创建
let heroModel = hm.model('heros', {
    name: String,
    skill: String,
    icon: String,
});

//2.创建抓包对象 
let c = new Crawler({
    maxConnections: 10,
    // 抓包回调：抓取成功之后会执行这个回调函数
    callback: function (error, res, done) {
        if (error) {
            console.log(error);
        } else {
            //将抓取到的页面赋值给jquery的$对象
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            // console.log($("html").html());
            //使用juqery语法解析页面
        //    console.log($('.herolist').html());
           
            //将解析出来的数据放到数组里，一次性存入数据库
            //1.声明空数组
            var heroArr = [];
            //2.开始解析
            $('.herolist>li').each((index,ele)=>{
                var name = $(ele).children('a').text();
                console.log(name);
                var icon = $(ele).find('img').attr('src');
                console.log(icon);
                //获取英雄的id
                var id = icon.split('/').pop().split('.')[0];
                //根据id拼接英雄的技能图标
                var skill = `//game.gtimg.cn/images/yxzj/img201606/heroimg/${id}/${id}00.png`

                heroArr.push({
                    name,
                    skill,
                    icon  
                });
	console.log(name,skill,icon)
            });

            heroModel.insert(heroArr,(err, results) => {
                if (!err) console.log('增加成功');
            });
        }
        done();
    }
});

// Queue just one URL, with default callback
//3.开始抓包
c.queue('https://pvp.qq.com/web201605/herolist.shtml');