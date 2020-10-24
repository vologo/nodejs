//1.导入路径模块
const path = require('path');

//2.合并路径

/*使用path模块拼接文件路径与  使用 '+'连接符拼接的好处
    1.会自动帮我们正确添加路径分隔符  '/',我们无需手动添加
    2.当我们路径格式拼接错误的时候，能自动帮我们转换正确的格式

*/

// path.join(路径1，路径2，路径3，……………………)
let filePath = path.join(__dirname,'aaa.txt');

console.log(__dirname);
console.log(filePath);

console.log(__dirname + '/aaa.txt');

let path1 = path.join(__dirname,'bbb','ccc.txt');
console.log(path1);

//获取上级目录   path.dirname(文件路径)
let path2 = path.dirname(path1);
console.log(path2);

let path3 = path.dirname(path2);
console.log(path3);

let path4 = path.dirname(path3);
console.log(path4);