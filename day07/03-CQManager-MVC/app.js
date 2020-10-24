//1.导入模块
const express = require('express');
//2.创建服务器
let app = express()

//3.配置中间件

//3.1 托管静态资源
app.use(express.static('www'));
app.use(express.static('static'));

//3.2 body-parser：解析body
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
//以后所有的req都会有一个body属性，就是解析好的post参数对象
app.use(bodyParser.urlencoded({ extended: false }));

//3.3 express-fileupload：接收文件数据
const fileUpload = require('express-fileupload');
app.use(fileUpload());

//3.4  mysql-ithm数据库操作
//3.5 验证码

//3.6 cookie-session中间件:保持会话状态
//一旦配置成功：req就会有一个session属性用来响应给客户端cookie
var cookieSession = require('cookie-session');
app.set('trust proxy', 1) // trust first proxy 信任首次登录陌生用户
app.use(cookieSession({
    name: 'adskljvgkldagvwd',
    keys: ['wskalevbklsabvlkjs'],//加密的密钥
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours   有效期
}));


//4.设计路由（接口文档）
app.use(require('./router/heroRouter.js'));
app.use(require('./router/userRouter.js'));


//5.开启服务器
app.listen(3000, () => {
    console.log('欢迎来到CQ荣耀');
});