//1.导入模块
var mysql = require('mysql');
//2.连接数据库
var connection = mysql.createConnection({
    host: 'localhost',//数据库地址
    port:'3306',
    user: 'root',//用户名，没有可不填
    password: 'root',//密码，没有可不填
    database: 'hm'//数据库名称
});
connection.connect();
//3.执行sql语句
connection.query('select * from student', function (error, results, fields) {
    if (error) throw error;
    console.log(results);//查询结果 
    console.log(fields);//表格信息 （表中有哪些字段等信息） 
});
//4.关闭连接 
connection.end();