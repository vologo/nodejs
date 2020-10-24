/* 

   1.箭头函数  ：  function函数的简写形式
        a. 把function 替换成 箭头=>
        b. 把形参小括号移动到箭头左边
        *  ()=>{}

   2.学习路线 ：
        2.1 常见用法
            无参无返回函数 : ()=>{}
            有参有返回函数 : (a,b)=>{return a+b }
        2.2 其他用法
            a. 如果函数只有一个形参，则可以省略形参小括号    a=>{return a*2}
            b. 如果函数体只有一行代码，则可以省略函数体大括号（也必须要省略return）  a=>a*2
*/


//1.1 无参无返回函数
let fn1 = ()=>{
    console.log(11111);
};

fn1();

//1.2 有参有返回函数
let fn2 = (a,b)=>{
    return a+b;
};

let res2 = fn2(10,20);
console.log(res2);//30

//2.其他用法

//2.1 如果函数只有一个形参，则可以省略形参小括号
// let fn = a=>{
//     return a*2;
// };

// let res = fn(100);
// console.log(res);//200

//2.2 如果函数体只有一行代码，则可以省略函数体大括号(如果有返回值，也必须要省略return关键字)
let fn = a=>a*2;

let res = fn(100);
console.log(res);//200





