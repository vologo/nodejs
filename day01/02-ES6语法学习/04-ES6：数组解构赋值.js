//数组解构赋值

let arr = [10,20,30];

/* ES5 */
// let n1 = arr[0];
// let n2 = arr[1];
// let n3 = arr[2];

// console.log(n1,n2,n3);

/* ES6 */
let [n1,n2,n3 = 50,n4 = 100] = arr;
console.log(n1,n2,n3,n4);// 10 20 30 100
