/* 1.自定义模块：使用文件路径来导入 */
const mokuai = require('./mokuai.js');
console.log(mokuai);

/* 2.内置模块 ： 模块名导入 */
const http = require('http');

/* 3.第三方模块 ： 模块名导入 */
var bodyParser = require('body-parser');

/* Nodejs模块加载缓存机制
(1)加载模块时，node会首先从缓存中查找，如果缓存中存在则直接读取。不存在则执行模块js代码并存入缓存
(2)第二次加载模块时，nodejs不会执行模块js代码，而是直接从缓存读取
*/

const mokuai1 = require('./mokuai.js');
console.log(mokuai1 === mokuai);

