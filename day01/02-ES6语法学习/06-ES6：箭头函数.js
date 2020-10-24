/* 
    1.学习目标：学会使用ES6的箭头函数
        * 箭头函数 => 其实是 function 关键字的简写形式
        * 写法： 将function关键字使用 => 符号代替
    2.学习路线
        (1)介绍箭头函数的常见用法 ： 重点
        (2)介绍箭头函数的其他用法 ： 了解
*/

//1.箭头函数常见用法

//1.1 无参无返回函数

/* ES5 */

let fn = function(){
    console.log('111');
};
fn();

/* ES6
箭头函数规则： （1）function变成 箭头符号 =>   (2)形参小括号写到箭头 => 左边
*/

let fn1 = ()=>{
    console.log('222'); 
};
fn1();

//1.2 有参有返回函数

/* ES5 */
let add =  function(a,b){
    return a+b;
};

console.log(add(10,20));

/* ES6 */
let add1 = (a,b)=>{
    return a+b;
};

console.log(add1(100,200));

//2.箭头函数其他用法

//2.1 如果函数只有一个形参，则可以省略形参小括号
let fn2 = a=>{ 
    return a*2;
};

console.log(fn2(20));

//2.2 如果函数体只有一行代码，则可以省略函数体大括号
//注意点： 如果省略函数体大括号，则返回值也要省略return
//下面代码等价于：  let fn3 = function(a){ return a*2 }

let fn3 = a => a*2;
console.log(fn3(30));








