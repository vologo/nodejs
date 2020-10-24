//导入模块
var express = require('express');
//创建路由：相当于app.js文件中那个app的分身
var app = express.Router();

//接收用户模块的路由
//路由层：负责分发路由给C层处理
let userController = require('../controller/userController.js');

app.get('/captcha',userController.captcha )//(6)验证码
.post('/user/register',userController.register )//(7)注册
.post('/user/login', userController.login)//(8)登录
.get('/logout',userController.logout )//(9)退出登录

//导出路由
module.exports = app;