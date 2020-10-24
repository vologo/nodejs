let obj1 = {
    name: '赛博朋克',
    sex: '女',
    year: 2077
}

// let { name, sex, year } = obj1;

// console.log(name, sex, year); //赛博朋克 女 2077


// let { name:nickname, sex='男', year } = obj1;
// console.log(nickname, sex); 



// let arr = [1, 2, 3, 4, 5];

// let [n1, n2, n3, n4,n5,n6] = arr;

// console.log(n1,n2,n3,n4,n5,n6);

// let obj = {
//     a: 10,
//     b:20

// }


let f1 = ({a,b})=>{
    return a + b;
}

console.log(f1({a:2,b:8}));







