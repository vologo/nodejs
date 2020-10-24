//C层：负责M与V的沟通桥梁（增删改查数据库响应返回给页面）
const svgCaptcha = require('svg-captcha');
const fs = require('fs');
//导入C层
let userModel = require('../model/userModel.js');
//声明全局变量存储验证码问题 （用于客户端验证）
let captchaTxt = '';

module.exports = {
    captcha: (req, res) => {
        //1.创建验证码对象
        var captcha = svgCaptcha.create();
        //2.获取验证码文本并保存
        captchaTxt = captcha.text;
        console.log(captcha.text);
        //3.将验证码图片响应给客户端
        res.type('svg');
        res.status(200).send(captcha.data);
    },
    register: (req, res) => {
        //1.获取post请求参数
        let body = req.body;
        console.log(body);
        //2.处理
        // code: 200 成功   401：用户已注册  402：验证码错误  500：服务器内部错误
        if (body.code.toLowerCase() != captchaTxt.toLowerCase()) { //全部转小写，不区分大小写
            //验证码错误
            res.send({
                code: 402,
                msg: '验证码错误'
            });
        } else {
            //检查是否已经注册
            userModel.find(`username="${body.username}"`, (err, results) => {
                if (err) {
                    res.send({
                        code: 500,
                        msg: '注册失败'
                    });
                } else if (results.length != 0) {
                    res.send({
                        code: 401,
                        msg: '用户已存在'
                    });
                } else { //如果没有注册，则添加到数据库
                    userModel.insert({
                        username: body.username,
                        password: body.password
                    }, (err, results) => {
                        if (err) {
                            res.send({
                                code: 500,
                                msg: '注册失败'
                            });
                        } else {
                            res.send({
                                code: 200,
                                msg: 'success'
                            });
                        }
                    })
                }
            });
        }
    },
    login: (req, res) => {
        //1.获取post请求参数
        let body = req.body;
        console.log(body);
        //2.处理请求
        // code: 200 成功   401：用户名错误 402：密码错误  500：服务器内部错误
        //2.1 先检查用户名在不在
        userModel.find(`username="${body.username}"`, (err, results) => {
            if (err) {
                res.send({
                    code: 500,
                    msg: err
                });
            } else if (results.length == 0) { //用户不存在
                res.send({
                    code: 401,
                    msg: '用户名或密码错误'
                });
            } else {
                //2.2 检查密码是否正确
                let user = results[0]; //如果可以查询到，则数组第一个元素就是用户数据
                console.log(body);
                console.log(user);
                if (user.password != body.password) {
                    res.send({
                        code: 402,
                        msg: '用户名或密码错误'
                    });
                } else {
                    //用户存在且密码一致，登录成功
                    //将用户信息存入session
                    req.session.user = req.body;
                    res.send({
                        code: 200,
                        msg: 'success'
                    });
                }
            };
        });
    },
    logout: (req, res) => {
        //1.清空session
        req.session = null;
        //2.重定向显示首页
        res.writeHead(302, {
            'Location': './index.html'
        });
        res.end();
    }
}