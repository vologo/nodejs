/* 
    1.学习目标： 对象解构赋值
        * 解构赋值本质 就是 变量赋值语法的简写形式

    2.学习路线： 对比法 ES5与ES6
        2.1 取出对象的值 赋值给  变量
            let {name,age,sex} = obj;
        2.2 取出变量的值 赋值给 对象
            let obj = {name,age,sex}
        2.3 解构赋值默认值
            let {name,age=18,sex} = obj;

*/

//1 取出对象的值 赋值给  变量

// let obj = {
//     name:'张国旗',
//     age:38,
//     sex:'女'
// };

//1.1 ES5
// let name = obj.name;
// let age = obj.age;
// let sex = obj.sex;
// let gender = obj.sex;

// console.log(name,age,sex);

//1.2 ES6

// let name = obj.name;
// let age = obj.age;
// let gender = obj.sex;   解构obj的sex属性值，存入变量gender
// let {name,age,sex:gender} = obj;
// console.log(name,age,gender);


//2 取出变量的值 赋值给  对象

// let name = '蛇哥';
// let age = 38;
// let sex = '女';

//2.1 ES5

// let obj = {
//     name:name,
//     age:age,
//     sex:sex
// };
// console.log(obj);

//2.2 ES6
// let obj = {
//     name,// 底层 name:name
//     age,// 底层 age:age
//     sex,// 底层 sex:sex
//     eat(){//eat:function(){}
//     console.log('学的开心');
    
//     }

// };

// console.log(obj);
// obj.eat();


//2.3 解构赋值默认值

let obj = {
    name:'张国旗',
    sex:'女',
    age:38,
};

//ES6

// let name = obj.name;
// let sex = obj.sex; 
/* let age = obj.age;
(1) let age;
(2) if( obj.age == undefined ){ age = 18 }else{ age = obj.name } 
*/
let {name,age=18,sex} = obj;
console.log(name,age,sex);






