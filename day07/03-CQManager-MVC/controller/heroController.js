//C层：负责M与V的沟通桥梁（增删改查数据库响应返回给页面）
const path = require('path');
//导入C层
let heroModel = require('../model/heroModel.js');

module.exports = {
    heroList: (req, res) => {
        //1.请求 : 获取参数search
        let search = req.query.search;
        //2.处理:查询数据库
        let str = '';
        if (search) {
            //如果客户端传了search，则使用mysql模糊查询
            str = `name like "%${search}%"`;
        } else {
            //如果客户端没有传search，则查询hero表格所有字段
            str = ['name', 'skill', 'icon', 'id'];
        };
        heroModel.find(str, (err, results) => {
            //3.响应
            if (err) {
                res.send({
                    code: 500,
                    msg: err
                });
            } else {
                res.send({
                    code: 200,
                    heros: results,
                    user: req.session.user//返回当前登录信息
                });
            }
        });
    },
    heroInfo:(req, res) => {
        //1.请求 : 获取参数id
        let id = req.query.id;
        //2.处理:查询数据库
        heroModel.find(`id=${id}`, (err, results) => {
            //3.响应
            if (err) {
                res.send({
                    code: 500,
                    msg: err
                });
            } else {
                res.send({
                    code: 200,
                    data: results[0]
                });
            }
        });
    },
    heroUpdate:(req, res) => {
        //请求 ： 获取参数 文件 + 文本
        console.log(req.files);
        console.log(req.body);
        let icon = req.files.icon;
        let { name, skill, id } = req.body;
        //处理 ：文件存入static 文本存入数据库  (图片名称格式 ：  英雄姓名.png )
        icon.mv(path.dirname(__dirname) + '/static/imgs/' + name + '.png', function (err) {
            if (err) {
                //响应
                res.send({
                    code: 500,
                    msg: err
                });
            }
        });
        //数据库存储的是文件的url路径
        heroModel.update(`id=${id}`, {
            name,
            skill,
            icon: '/imgs/' + name + '.png'
        }, (err, results) => {
            //响应
            if (err) {
                res.send({
                    code: 500,
                    msg: err
                });
            } else {
                res.send({
                    code: 200,
                    msg: '编辑成功'
                });
            }
        });
    },
    heroDelete:(req, res) => {
        //1.请求 ： 获取参数 id
        console.log(req.body);
        let id = req.body.id;
        //2.处理 ： 删除数据
        heroModel.delete(`id=${id}`, (err, results) => {
            //3.响应
            if (err) {
                res.send({
                    code: 500,
                    msg: err
                });
            } else {
                res.send({
                    code: 200,
                    msg: '删除成功'
                });
            }
        });
    },
    heroAdd:(req, res) => {
        //1.请求 ： 获取参数 文件 + 文本
        console.log(req.files);
        console.log(req.body);
        let icon = req.files.icon;
        let { name, skill } = req.body;
        //2.处理 ：文件存入static 文本存入数据库  (图片名称格式 ：  英雄姓名.png )
        icon.mv(path.dirname(__dirname) + '/static/imgs/' + name + '.png', function (err) {
            if (err) {
                //响应
                res.send({
                    code: 500,
                    msg: err
                });
            }
        });
        //数据库存储的是文件的url路径
        heroModel.insert({
            name,
            skill,
            icon: '/imgs/' + name + '.png'
        }, (err, results) => {
            //3.响应
            if (err) {
                res.send({
                    code: 500,
                    msg: err
                });
            } else {
                res.send({
                    code: 200,
                    msg: '新增成功'
                });
            }
        });
    }

}