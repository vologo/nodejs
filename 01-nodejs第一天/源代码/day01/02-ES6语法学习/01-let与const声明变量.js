/* 
学习新语法最好学习方式：对比法

1.ES5声明变量 ： var特点 (了解)
    a. 变量提升 ： 变量声明提升到当前作用域最顶端（变量可以在声明之前被访问）
    b. 没有块级作用域：(分支,循环)大括号里面声明的变量不是局部的，而是全局的

2.ES6声明变量： let 与 const 特点
    a. 没有变量提升 ： 变量必须要先声明，后使用
    b. 块级作用域：(分支,循环)大括号里面声明的变量是局部的 （避免全局变量污染）

3.let与const区别
    a.let : 变量。 可以赋值多次
    b.const:常量。 只能在声明的时候赋值一次。
*/

//1.ES5声明变量 ： var特点 (了解)

// 1.1变量提升 ： 变量声明提升到当前作用域最顶端
// console.log(num);//undefined
// var num = 10;
// console.log(num);//10

// 1.2 没有块级作用域 ： （分支，循环）大括号里面声明的变量不是局部的，而是全局的
// if(true){
//     //块级作用域 ： 大括号里面的变量是局部的
//     var num1 = 50;
//     console.log(num1);//50 
// };

// console.log(num1);

//2. ES6声明变量： let 与 const 特点

//2.1 没有变量提升
// console.log(num);//报错，变量需要先声明后使用
// let num = 10;
// console.log(num);//10

// 2.2 有块级作用域
// if(true){
//     //块级作用域 ： 大括号里面的变量是局部的
//     let num1 = 50;
//     console.log(num1);//50 
// };

// console.log(num1);//报错

//3.let与const区别

//3.1 let :  变量，相当于var . 变量的值可以修改
let num = 10;
num = 20;
console.log(num);

//3.2 const : 常量: 只能声明时候赋值一次，变量的值无法修改
const num1 = 200;
console.log(num1);

// 注意:
const c;
// c = 200; // 报错, 声明时不赋值, 会默认赋值undefined
console.log(c);








