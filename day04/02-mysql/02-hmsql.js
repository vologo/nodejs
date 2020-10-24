//1.导入模块
const mysql = require('mysql');
const hm = require('mysql-ithm');

//2.连接数据库
hm.connect({
    host: 'localhost',//数据库地址
    port:'3306',
    user: 'root',//用户名，没有可不填
    password: 'root',//密码，没有可不填
    database: 'hm'//数据库名称
});

//3.创建Model(表格模型：负责增删改查)
let studentModel = hm.model('student',{
    name:String,
    age:Number
});

//4.调用API：添加数据
studentModel.insert({name:'张三10',age:30},(err,results)=>{
    console.log(err);
    console.log(results);
    if(!err) console.log('增加成功');
});

//2.查询数据

//2.1 查询所有数据
studentModel.find((err,results)=>{
    console.log(results);
});

//2.2 根据数据库字段查询部分数据
// ['name'] : 将要查询的字段放入数组中
studentModel.find(['name'],(err,results)=>{
    console.log(results);
});

//2.3 根据条件查询数据
// 'id=1' : 查询id为1的数据 (查询条件可以参考sql语句)
//例如 'age>10' : 查询age超过10的数据 
//例如 'name>"张三"' : 查询名字为张三的数据，注意字符串添加引号
studentModel.find('id>21',(err,results)=>{
    console.log(results);
});

//2.4 分页查询
//  第一个参数options对象有三个属性 {where:分页查询条件（可选）， number:页数 ， count：每页数量}
studentModel.limit({where:'age>28',number:1,count:10},(err,results)=>{
    console.log(results);
});

// //3.修改数据

//3.1 将数据库中所有的name字段值：修改为李四
studentModel.update({name:'李四'},(err,results)=>{
    console.log(results);
});

//3.2 将数据库中 id = 1 的数据，age修改为30
studentModel.update('id=1',{age:30},(err,results)=>{
    console.log(results);
});

//3.3 将数据库中所有 age < 20 的数据，name修改为王五
studentModel.update('age<20',{name:'王五'},(err,results)=>{
    console.log(results);
});

// //4.删除数据

//4.1 删除所有 age>30 的数据
studentModel.delete('age>20',(err,results)=>{
    console.log(results);
});

//4.2 清空表中所有数据
studentModel.delete((err,results)=>{
    console.log(results);
});

// //5.执行自定义sql语句
studentModel.sql('insert into student(name,age) values("andy",20)',(err,results)=>{
    console.log(results);
});

//6.删除model表格(慎用！)
studentModel.drop((err,results)=>{
    console.log(results);
});

//7.链式语法支持
studentModel.insert({name:'张三22',age:22},(err,results)=>{
    console.log(err);
    console.log(results);
})
.find('name="张三22"',(err,results)=>{
    console.log(err);
    console.log(results);
});

