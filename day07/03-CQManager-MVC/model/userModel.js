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

//用户表格
let userModel = hm.model('users', {
    username: String,
    password: String,
});

//导出userModel(负责数据库增删改查)
module.exports = userModel;