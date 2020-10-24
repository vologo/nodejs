const querystring = require('querystring');

/*  导出中间件(函数)
    第一个参数：请求对象
    第二个参数：完成回调
        * postObject:post请求参数对象
*/
module.exports = (req, res, next) => {
    /*如果本次请求是post请求，则解析post请求参数，
    并且将解析好的参数对象作为req的属性传递给下一个中间件*/
    if (req.method == 'POST') {
        //1.1 给req注册一个data事件
        let postData = "";
        req.on('data', function (chuck) {
            postData += chuck;
        });
        //1.2给req注册一个end事件
        req.on('end', function () {
            //1.3 使用 querystring模块解析post参数
            let postObjc = querystring.parse(postData);
            //将解析好的参数对象添加到req的属性中
            req.body = postObjc;
            //执行下一个中间件
            next();
        });
    }

}