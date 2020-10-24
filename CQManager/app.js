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
//用户表格
let userModel = hm.model('users', {
    username: String,
    password: String,
});

//3.5 验证码
const svgCaptcha = require('svg-captcha');

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

//(1)查询英雄列表
app.get('/hero/list', (req, res) => {
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

});

//(2)查询英雄详情
app.get('/hero/info', (req, res) => {
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
});

//(3)编辑英雄
app.post('/hero/update', (req, res) => {
    //请求 ： 获取参数 文件 + 文本
    console.log(req.files);
    console.log(req.body);
    let icon = req.files.icon;
    let { name, skill, id } = req.body;
    //处理 ：文件存入static 文本存入数据库  (图片名称格式 ：  英雄姓名.png )
    icon.mv(__dirname + '/static/imgs/' + name + '.png', function (err) {
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
});

//(4)删除英雄
app.post('/hero/delete', (req, res) => {
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
});

//(5)新增英雄
app.post('/hero/add', (req, res) => {
    //1.请求 ： 获取参数 文件 + 文本
    console.log(req.files);
    console.log(req.body);
    let icon = req.files.icon;
    let { name, skill } = req.body;
    //2.处理 ：文件存入static 文本存入数据库  (图片名称格式 ：  英雄姓名.png )
    icon.mv(__dirname + '/static/imgs/' + name + '.png', function (err) {
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
});

//(6)验证码
//声明全局变量存储验证码问题 （用于客户端验证）
let captchaTxt = '';
app.get('/captcha', (req, res) => {
    //1.创建验证码对象
    var captcha = svgCaptcha.create();
    //2.获取验证码文本并保存
    captchaTxt = captcha.text;
    console.log(captcha.text);
    //3.将验证码图片响应给客户端
    res.type('svg');
    res.status(200).send(captcha.data);
});

//(7)注册
app.post('/user/register', (req, res) => {
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
});

//(8)登录
app.post('/user/login', (req, res) => {
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
});

//(9)退出登录
app.get('/logout', (req, res) => {
    //1.清空session
    req.session = null;
    //2.重定向显示首页
    res.writeHead(302, {
        'Location': './index.html'
    });
    res.end();
});

//5.开启服务器
app.listen(3000, () => {
    console.log('欢迎来到CQ荣耀');
});