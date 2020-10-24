/* 
    数组解构赋值
*/

//1.取出数组的值 赋值给 变量



let arr = [10,20,30];

//let n1 = arr[0]
//let n2 = arr[1]
//let n3 = arr[2]
//let n4 = arr[3]
let [n1,n2,n3,n4] = arr;
console.log(n1,n2,n3,n4);//10,20,30,undefined

//2.取出变量的值 赋值给 数组

let num1 = 100;
let num2 = 200;
let arr1 = [num1,num2];
