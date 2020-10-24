/* 

1.展开运算符 : ...

2.作用： 相当于对象遍历简写形式   (类似于for-in循环)

3.学习目标
    3.1 基本用法
    3.2 应用场景
        (1)连接数组
        (2)求数组最大值/最小值
        (3)数组去重

*/

//1.基本用法

let car = {
    pinpai:'红旗',
    price : 100000
};

let girl = {
    pinpai : '苍老师',
    country:'岛国'
};


let person = {
    name:'张国旗',
    age:38,
    ...car,
    ...girl
};

console.log(person);

//2.应用场景

//2.1 连接数组
let arr1 = [10,20,30];
let arr2 = [40,50,60];
let arr3 = [70,80,90];

//ES5: concat()
// let newArr = arr1.concat(arr2);
// newArr =  newArr.concat(arr3);
// newArr.push(100);
// console.log(newArr);

//ES6: ...
let newArr = [...arr1,...arr2,...arr3,100];
console.log(newArr);

//2.2 求数组最大值/.最小值

let arr = [80,100,20,60,50,40];

//ES5 : 擂台思想 、 Math.max.apply()
let max = Math.max(...arr);
console.log(max);



