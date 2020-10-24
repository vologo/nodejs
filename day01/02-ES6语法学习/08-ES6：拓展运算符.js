/* 学习目标
1.拓展运算符：   ...
2.作用：类似于  对象遍历的一种简写形式
3.应用场景介绍
*/


//1.基本使用
let person = {
    name: '班长',
    age: 38,
    sex: '男'
};


let student = {
    score: 99,
    girlFriend: '代码'
};

let banzhang = {
    ...person,//相当于遍历person的属性名和属性值  赋值给班长对象
    ...student,
    hobby: '学习'
};

console.log(banzhang);//{ name: '班长',age: 38,sex: '男',score: 99,girlFriend: '代码',hobby: '学习' }


//2.应用场景

//2.1 连接两个数组
let arr1 = [10, 20, 30];
let arr2 = [40, 50, 60];

/* ES5写法 */
//concat:连接数组
// let arr3 = arr1.concat(arr2);
//连接之后 想要继续添加元素 需要继续调用push
// arr3.push(70);
// console.log(arr3);

/* ES6写法 */
let arr3 = [...arr1, ...arr2,70];
console.log(arr3);

//2.2 求数组最大值和最小值

let arr = [88,25,60,90,100];

/*  ES5写法 */
//利用apply传参特点 : 自动遍历arr，逐个传参
// let max = Math.max.apply(Math,arr);
// console.log(max);

/* ES6写法 */
let max = Math.max(...arr);
console.log(max);












