//(1)导包
const hm = require('mysql-ithm');
//(2)连接数据库
hm.connect({
    host: 'localhost',//数据库地址
    port: '3306',
    user: 'root',//用户名，没有可不填
    password: 'root',//密码，没有可不填
    database: 'cqmanager'//数据库名称
});

//(3)创建Model(表格模型：负责增删改查)
//英雄表格
let heroModel = hm.model('heros', {
    name: String,
    skill: String,
    icon: String,
});

//导出heroModel(负责数据库增删改查)
module.exports = heroModel;