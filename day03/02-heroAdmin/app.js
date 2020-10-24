//1.导入模块
const express = require('express');
//2.创建服务器
let app = express();

//3.配置中间件
//3.1 托管静态资源
app.use(express.static('www'));
app.use(express.static('static'));
//3.2 body-parser
//导入模块
const bodyParser = require('body-parser');
//使用中间件
app.use(bodyParser.urlencoded({ extended: false }));
//3.3 数据库
const heroModel = require('./modal/heroModel.js');
//3.4 文件上传
//使用该中间件之后，express中的req对象会添加一个files属性 用于接收客户端上传的文件
const fileUpload = require('express-fileupload');
app.use(fileUpload());
//3.5 跨域中间件
var cors = require('cors');
app.use(cors());

//4.路由（前端人员的接口文档）

//4.1 查询所有英雄：  /hero/all
app.get('/hero/all', (req, res) => {
    //处理：查询数据库所有数据返回
    let heros = heroModel.all();
    console.log(heros);
    //响应
    res.send({ data: heros });

});

//4.2 删除英雄 ： /hero/delete
app.get('/hero/delete', (req, res) => {
    //请求 ： 获取参数id
    let id = req.query.id;
    console.log(req.query);
    //处理：删除数据库数据
    let success = heroModel.delete({ id });
    //响应：成功：204 失败：500
    if (success) {
        res.send({ code: 204, msg: '删除成功' });
    } else {
        res.send({ code: 500, msg: '删除失败' });
    };
});

//4.3 新增英雄  /hero/add
app.post('/hero/add', (req, res) => {
    //请求 ： 获取参数 文件 + 文本
    console.log(req.files);
    console.log(req.body);
    let icon = req.files.icon;
    let { name, skill } = req.body;
    //处理 ：文件存入static 文本存入数据库
    icon.mv(__dirname + '/static/imgs/' + icon.name, function (err) {
        if (err)
            return res.status(500).send(err);
    });
    //数据库存储的是文件的url路径
    let success = heroModel.save({
        name,
        skill,
        icon: '/imgs/' + icon.name
    });
    //响应：成功：201 失败：500
    if (success) {
        res.send({ code: 201, msg: '新增成功' });
    } else {
        res.send({ code: 500, msg: '新增失败' });
    };

});

//4.4 查询英雄   /hero/id
app.get('/hero/id', (req, res) => {
    //请求 ： 获取参数id
    let id = req.query.id;
    //处理 ： 查询数据库
    let hero = heroModel.id({ id });
    //响应
    res.send({ data: hero });
});

//4.5 编辑英雄   /hero/update
app.post('/hero/update', (req, res) => {
    //请求 ： 获取参数 文件 + 文本
    console.log(req.files);
    console.log(req.body);
    let icon = req.files.icon;
    let { name, skill,id } = req.body;
    //处理 ：文件存入static 文本存入数据库
    icon.mv(__dirname + '/static/imgs/' + icon.name, function (err) {
        if (err)
            return res.status(500).send(err);
    });
    //数据库存储的是文件的url路径
    let success = heroModel.update({
        name,
        skill,
        id,
        icon: '/imgs/' + icon.name
    });
    //响应：成功：202 失败：500
    if (success) {
        res.send({ code: 202, msg: '编辑成功' });
    } else {
        res.send({ code: 500, msg: '编辑失败' });
    };
});


//5.开启服务器
app.listen(4399, () => {
    console.log('success');
});