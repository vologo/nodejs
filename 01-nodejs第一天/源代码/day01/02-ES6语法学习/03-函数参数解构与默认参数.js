/* 

    1.复习函数调用传参原理 ： 实参给形参赋值

    2.函数参数解构

    3.函数设置默认参数
*/


//1. 函数参数解构
function fn({name,age=20}){// let {name,age} = {name:'国旗歌',age:38}
    // console.log(obj);
    // let name = obj.name;
    // let age = obj.age;
    console.log(name,age);
    
    
};


fn({name:'国旗歌',age:38});

//2.函数默认参数

//ES5默认参数

function fn1(a=10,b=20){
    //逻辑或短路： 找真。 
    // a =  a || 10;
    // b = b || 20;
    console.log(a,b);
};

fn1();
fn1(10);
fn1(100,200);