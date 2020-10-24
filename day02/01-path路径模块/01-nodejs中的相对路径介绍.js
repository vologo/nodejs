

const fs = require('fs');




/*a.注意点： node中的相对路径： ./  不是相对于当前文件所在路径，而是相对于执行node命名的文件夹路径
在服务端开发中，一般不要使用相对路径，而使用绝对路径
  b.解决方案：在nodejs中，每一个js文件都有两个全局属性，它可以帮助我们获取到文件的绝对路径
    __dirname:当前js文件所在目录的绝对路径
    __filename:当前js文件的绝对路径
*/
console.log(__dirname);
console.log(__filename);

/*2.如果想要获取当前文件夹下其他文件绝对路径，可以使用 __dirname属性来拼接
*/


// 注意:
// win10中会自动识别\/ 但是为了兼容性, 路径还是\比较好, 注意要写成转义字符模式


var path = __dirname + '/aaa.txt';

var path = __dirname + '\\aaa.txt';
console.log(path);

fs.readFile(path,'utf-8',(err,data)=>{
    
    if(err){
        console.log(err);
        //抛出异常，throw的作用就是让node程序终止运行，方便调试
        throw err;
    }else{
        console.log(data);
    };
});