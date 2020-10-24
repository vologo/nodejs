/* 
    1.学习目标 ： 掌握ES6新增两个关键字 let 与 const
      * let 与 const的作用是声明变量，类似于ES5的var关键字
    2.学习路线（对比法学习）
      (1) 复习ES5的var关键字两个特点
      (2) 介绍ES6的let与const关键字的两个特点
      (3) 介绍let与const的区别 与 注意点
*/

/* 1.ES5语法var变量特点 */


// 1.1 变量会提升
console.log(num);//undefined
var num = 10;

// 1.2 没有块级作用域
for (var i = 1; i < 5; i++) {
  console.log('循环内' + i);
};

console.log('循环外' + i);//5

/* 2.ES6新增两种变量声明方式（let与const），类似于var
     (1).不会提升
     (2).有块级作用域
*/

// （1）如果打印undefined，说明提升了,如果报错，说明没有提升
// console.log(a);//报错
// let a = 10;

// (2)如果打印5，说明没有块级作用域  （2）如果报错，说明有块级作用域
  
for(let j = 1;j<5;j++){
  console.log(j);
};

// console.log(j);


/* 3.let与const区别
  * 注意点：ES6中变量不能重复声明，否则会报错
*/

//3.1 let声明：变量，允许修改
let a = 10;
a = 20;
// let a = 30;//程序报错，不允许重复声明
console.log(a);

//3.2 const声明:常量，只可以 *声明* 的时候赋值一次，之后无法修改
const b = 100;
// b = 200;//程序报错
console.log(b);

// 注意:
const c;
// c = 200; // 报错, 声明时不赋值, 会默认赋值undefined
console.log(c);


