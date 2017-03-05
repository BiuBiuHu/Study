/**
 * Created by Administrator on 2017/2/20 0020.
 */
var es6Code = 'let x = n => n + 1';

class Calc {
    constructor(){
        console.log('Calc constructor');
    }
    add(a, b){
        return a + b;
    }
}

var c = new Calc();
console.log(c.add(4,5));


for(let i = 0; i < 10; i++){
    console.log(i)
}
console.log(2,i);

var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]();
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}
console.log(bar); // 报错ReferenceError
let bar = 2;


if (true) {
    // TDZ开始
    tmp = 'abc'; // ReferenceError
    console.log(tmp); // ReferenceError

    let tmp; // TDZ结束
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123
}
/*
function bar(x = y, y = 2) {
    return [x, y];
}

bar(); // 报错*/
/*
function() {
    let a = 10;
    var a = 1;
}*/
function f() { console.log('I am outside!'); }
(function () {
    if (false) {
        // 重复声明一次函数f
        function f() { console.log('I am inside!'); }
    }

    f();
}());

function f(x = 1, y) {
    return [x, y];
}

/*f() // [1, undefined]
f(2) // [2, undefined])
f(, 1) // 报错
f(undefined, 1) // [1, 1]*/

function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数
    setInterval(() => this.s1++, 1000);
    // 普通函数
    setInterval(function () {
        this.s2++;
    }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);

import {firstName , lastName as familyName } from './profile.js';
console.log(firstName+' '+ familyName);


