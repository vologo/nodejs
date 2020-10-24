var express = require('express');
//创建路由：相当于app.js文件中那个app的分身
var app = express.Router();

//接收英雄模块的路由

//路由层：负责分发路由给C层处理
let heroController = require('../controller/heroController.js');


app.get('/hero/list', heroController.heroList)//(1)查询英雄列表
.get('/hero/info', heroController.heroInfo)//(2)查询英雄详情
.post('/hero/update', heroController.heroUpdate)//(3)编辑英雄
.post('/hero/delete',heroController.heroDelete )//(4)删除英雄
.post('/hero/add',heroController.heroAdd );//(5)新增英雄

//导出路由
module.exports = app;