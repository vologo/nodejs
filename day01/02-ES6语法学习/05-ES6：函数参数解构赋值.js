/* 
    1.学习目标 ： 掌握函数参数的解构赋值
    2.学习路线
        （1）复习 函数 传参的本质是 实参给形参赋值的过程
        （2）使用解构赋值语法 给函数传参
        （3）使用解构赋值语法 设置 函数的默认参数
*/

/* (1) ES5 :函数传参  */

/**
* @description:
* @param {Object}  obj:对象类型  {name:名字 age:年龄 sex:性别}
* @return: 
*/
// function fn(obj){
//     console.log(obj);
//     //声明三个变量接收对象的参数值
//     let name = obj.name;
//     let age = obj.age;
//     let sex = obj.sex;
//     console.log(name,age,sex);
// };

// fn({
//     name:'黑马李宗盛',
//     age:32,
//     sex:'男'
// });


/* (2) ES6 :函数传参  */

// function fn1({name,age,sex}){
//     //声明三个变量接收对象的参数值
//     console.log(name,age,sex);
// };

// fn1({
//     name:'黑马李宗盛',
//     age:32,
//     sex:'男'
// });

//添加解构语法默认值
// function fn2({name = '班长',age = 38,sex:gender='女'}){
//     //声明三个变量接收对象的参数值
//     console.log(name,age,gender);
// };

// fn2({
//     name:'黑马李宗盛',
// });

/* (3)函数默认参数 */

/* ES5:使用逻辑或短路运算实现 */
// function fn(n1,n2,n3){
//     n1 = n1 || 10;
//     n2 = n2 || 20;
//     n3 = n3 || 30;
//     console.log(n1,n2,n3);
// };

// fn(5,8);
// fn();

/* ES6:使用解构赋值语法默认值实现 */
function fn(n1 = 10,n2 = 20,n3 = 30){
    console.log(n1,n2,n3);
};

fn(5,8);
fn();