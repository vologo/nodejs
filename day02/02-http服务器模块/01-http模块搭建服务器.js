//1.导入模块
const http = require('http');

//2.创建服务器
//相当于安装了phpstudy的服务器

/* 参数：回调函数
    req: request 客户端请求对象
    res:response 服务端响应对象
 */
let server = http.createServer((req,res)=>{
    //获取客户端请求路径
    console.log(req.url);
    
});

//3.启动服务器:相当于点击了phpstudy开启按钮

/*第一个参数：端口号  一般1000-60000之间
第二个参数：ip地址  默认不写 就是本地ip 
第三个参数：成功回调
 */
server.listen(3000,()=>{
    console.log('服务器开启成功');
});