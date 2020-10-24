/* 
    1.学习目标：掌握对象的解构赋值语法
        * 解构赋值本质 就是 变量赋值语法的简写形式
    2.学习路径 ： 对比法学习（ES5与ES6对比）
        （1）取出 对象的属性值 赋值给 变量
        （2）取出 变量的值 赋值给 对象的属性
        （3）设置 解构赋值语法 的默认值

*/

//解构赋值语法 ： 其实就是变量赋值语法的简写形式

//1：取出 对象的属性 赋值 给变量




let obj = {
    name:'张三',
    age:18,
    sex:'男'
};

/* ES5 */
// let name = obj.name;
// let age = obj.age;
// let sex = obj.sex;
// console.log(name,age,sex);

/* ES6 */

/* a.这行代码本质:声明三个变量 name，age，sex。取出右边obj对象对应的属性名赋值给左边的变量*/
// let {name,age,sex} = obj;
// console.log(name,age,sex);

/* b.由于obj对象没有score属性，所以变量score的值为undefined。 */
// let {name,score} = obj;
// console.log(name,score);

/* c. sex:gender 的含义 ： let gender = obj.sex */
// let {name,sex:gender} = obj;
// console.log(name,gender);
// 注意: 
// 报错: sex is not defined
// 原因: sex没有声明, 直接打印
// console.log(name,sex);



//2：取出变量的值 赋值给对象的属性

// let name = '李四';
// let age = 20;
// let sex = '男';
// let sayHi = function(){
//     console.log('你好');  
// };

/* ES5  */
// let person = { 
//     name : name,
//     age : age,
//     gender : sex,
//     sayHi :sayHi
// };
// console.log(person);

/* ES6 */
// let person = { 
//     name,//等价于 name:name
//     age,
//     gender:sex,//如果属性名和变量名不一致，还是按照以前ES5的写法来赋值
//     sayHi,
//     play(){//等价于：play:function(){}
//         console.log('学习使我快乐');
//     }
// };

// console.log(person);

//3. 设置 解构赋值语法 的默认值

let student = {
    name:'班长',
    age:38,
    sex:'女'
};
/* 
（1）  name = '坤哥'   
    a. 声明变量name : let name;
    b. 取出student对象的name属性值赋值给name : student.name
    c. 如果student对象没有name属性则赋值坤哥 :   if(student.name){ name = student.name }else{ name = '坤哥' }
    
 (2) sex:gender = '男'
    a. 声明变量gender : let gender;
    b. 取出student对象的sex属性值赋值给gender : student.sex
    c. 如果student对象没有sex属性则赋值男 :   if(student.sex){ gender = student.sex }else{ gender = '男' }
*/
let {name = '坤哥',score = 88,sex:gender = '男'} = student;
console.log(name,score,gender);









