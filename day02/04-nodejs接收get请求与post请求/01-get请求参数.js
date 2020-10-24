//1.导入模块
const http = require('http');

//导入url模块：解析get请求参数
const url = require('url');

//2.创建服务器
let server = http.createServer((req,res)=>{
    console.log(req.url);
    //了解即可：如果请求路径有中文，浏览器会自动进行URI编码
    console.log(decodeURI(req.url));
    // //使用原生的字符串分隔来获取参数
    // let arr = req.url.split('?');
    // console.log(arr);

    /* 1.使用url模块来解析get请求参数
    第一个参数：要解析的url（完整的url）
    第二个参数：布尔类型  true:得到是参数是对象（推荐）  false：得到参数是字符串
    返回值：对象（将完整url的每一个部分作为对象的属性）
    */
    let urlObjc = url.parse(req.url,true);
    console.log(urlObjc);
    //2.获取请求路径pathName
    let pathName = urlObjc.pathname;
    console.log(pathName);
    //3.获取get请求参数
    let query = urlObjc.query;
    console.log(query);

    //解析好的参数响应给客户端
    //服务器不能直接返回返回js对象（服务器具有跨平台性），需要转成json对象
    res.end(JSON.stringify(query));
    
});

//3.开启服务器
server.listen(3000,()=>{
    console.log('success');
    
});