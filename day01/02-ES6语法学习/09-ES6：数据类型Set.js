/* 
1. Set :集合。 ES6新增的数据类型，类似于ES5的数组
2. Set与Array最大的区别 ： Set不支持重复元素
3. Set经典应用场景 ： 数组去重
*/

//1.基本使用
let set1 = new Set([10,20,30,40,10,40]);
console.log(set1);//Set(4) {10, 20, 30, 40}

//2.经典场景：数组去重
// let arr = [...set1];
// console.log(arr);//[ 10, 20, 30, 40 ]

//经典面试题：请使用一行代码实现数组去重
let arr = [20,60,88,50,20,66,100];

let arr1 = [...new Set(arr)];
console.log(arr1);//[ 20, 60, 88, 50, 66, 100 ]





