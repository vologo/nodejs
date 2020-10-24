/* 

1.数据类型Set : 集合   (类似于数组)
    * 与数组最大的区别 ： Set不能存储重复元素

2.基本使用

3.经典应用场景： 一行代码实现数组去重
*/

let set = new Set([10,20,60,80,10,20]);
console.log(set);

let arr = [...set];
console.log(arr);

//一行代码实现数组去重
let arr1 = [10,20,20,30,50,60,30,88,22];
let newArr = [...new Set(arr1)];
console.log(newArr);


