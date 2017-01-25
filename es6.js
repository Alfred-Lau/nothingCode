// "use strict";


// console.log('es6.js');

//a.箭头函数
// var name = (x => x + 1)(1);
// console.log(name);


//b. 块级作用域
// var a = [];
// for (var i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }
// a[6](); 

//ES6要使用块级作用域的(let, const, function, class),必须声明为“use strict”

// var a = [];
// for (let i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// }
// a[6](); // 6


//c. let不存在变量提升
// console.log(foo);  //变量提升，undefined
// console.log(es6);  //不存在变量提升，ReferenceError: es6 is not defined

// var foo = 2;
// let es6 = 2;

// var constantize = (obj) => {
//   Object.freeze(obj);
//   Object.keys(obj).forEach( (key, value) => {
//     if ( typeof obj[key] === 'object' ) {
//       constantize( obj[key] );
//     }
//   });
// };

// let [a, b, c] = [2, 3, 4];
// a;

// console.log('new way')


// function* fibs() {
//   var a = 0;
//   var b = 1;
//   while (true) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }

// var [first, second, third, fourth, fifth, sixth] = fibs();

//好风骚的写法！！！！!!
// class Cal{
// 	construct(){
// 		console.log('init');
// 	}

// 	add(a, b){
// 		return a + b;
// 	}
// }

// const tmp = new Cal();
// console.log(tmp.add(5, 4));

// process.on('uncaughtException', ()=>{
// 	console.log('uncaughtException Event emitted.');
// });


// {
// 	let a = 5;
// 	var b = 4;
// }


// console.log(b);
// console.log(a);


// console.log(typeof(x));
// let x = 12;


// function bar(x = y, y = 2) {
// 	return [x, y];
// }

// function bar(x = 2, y = x) {
// 	return [x, y];
// }

// console.log(bar());



// 解构赋值:对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；
//而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。


// var {foo, bad} = {foo: "aaa", bar: "bbb"};

// bad;

//wrong syntex: const mymodule = require('module');
// const mymodule = require('./module');

// mymodule.firstMethod();
// const {firstMethod} = require('./module');

// firstMethod();



// 下面代码用来检查当前环境是否支持该方法，如果不支持，部署一个简易的替代版本。

//好nb的写法！！！
// const contains = (() =>
//     Array.prototype.includes ? (arr, value) => arr.includes(value) : (arr, value) => arr.some(el => el === value)
// )();
/**
 *
 * 执行原理：
 1.contains是一个立即执行函数，出现之后，返回一个函数；
 2.返回的函数结合调用时传入的参数部分，生成一个新的函数
 3.这个函数又会被调用执行；
 *
 */

// contains(["foo", "bar"], "baz"); // => false


//数组推导，es6不支持，es7支持

// var a1 = [1, 2, 3, 4];
// var a2 = [for (i of a1) i * 2];

// a2 // [2, 4, 6, 8]

// es6之前函数参数默认值的写法：

// function para(x, y) {
// 	y = y || "Nbility";
// 	console.log(`hello, ${y}`);

// }

// para('lau');//
// para('lau', 'alf');
// para('lau','');//空字符串
// para('lau',' ');//空格不为空

// function bar(f, func = f) {
//     let foo = 'inner';
//     console.log(func()); // outer
// }

// bar(() => foo);



// 带Iterator接口的Map，Set结构
// let map = new Map([
//     [1, 'one'],
//     [2, 'two'],
//     [3, 'three'],
// ]);

// let val = [...map.keys()];

// console.log(val);



//生成器函数
// var go = function*() {
//     yield 1;
//     yield 2;
//     yield 3;

// };

// let var2 = [...go()];
// console.log(var2);


// await

// function timeout(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }

// async function asyncPrint(value, ms) {
//     await timeout(ms);
//     console.log(value)
// }

// asyncPrint('hello world', 50);

// class es {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     toString() {
//         return '(' + this.x + ', ' + this.y + ')';
//     }
// }

// let v1 = new es(3, 6);
// console.log(v1.toString());

// import { m1 as n1 } from './module';

// n1();

// var arr = ['red', 'green', 'blue'];

// for (let a in arr) {
//     console.log(a);
// }

// for (let key of arr) {
//     console.log(key);
// }

// for (let key of Array.keys(arr)) {
//     console.log(key);
// }

// for (let key of Array.values(arr)) {
//     console.log(key);
// }

// for (let entries of arr.entries()) {
//     console.log(entries);
// }


// let obj = Proxy.create({
//     get: function(target, key, receiver) {
//         console.log(`getting ${key}!`);
//         return Reflect.get(target, key, receiver);
//     },
//     set: function(target, key, value, receiver) {
//         console.log(`setting ${key}!`);
//         return Reflect.set(target, key, value, receiver);
//     }
// }, {});

// var obj = new Proxy({}, {
//     get: function(target, key, receiver) {
//         console.log(`getting ${key}!`);
//         return Reflect.get(target, key, receiver);
//     },
//     set: function(target, key, value, receiver) {
//         console.log(`setting ${key}!`);
//         return Reflect.set(target, key, value, receiver);
//     }
// });
// obj.count = 1;
// obj.count;





// function test(){
//     var result = [];

//     for(var i = 0;i< 10;i++ ){
//         result[i] = function(){
//             console.log(i);
//             return i;
//         };
//     }

//     return result;
// }


// function test(){
//     var result = [];

//     for(var i = 0;i< 10;i++ ){
//     此处用到立即执行函数
//         result[i] = function(num){
//             return function(){
//                 console.log(num);
//                 return num;
//             }
//         }(i);
//     }
// result中的都是函数，参数1-10
//     return result;
// }

// console.log(test())

// for (var n of test()){
//     n()
// }

// console.log(test.name)

// function tdz(x=y, y=2){
//     return [x , y];

// }

// tdz()


// function tdz(){
//     x=5;
    
// }

// tdz()


// IIFE

// (function(){
//     console.log('iife');
// }())



//
// (function iife(name){console.log(name)})('test name')
//
// function f(){
//     let a='dsds',b='eee';
//     {
//         let tmp;
//         tmp = a;
//         a = b;
//         b=tmp;
//             console.log(tmp);
//
//     }
// }

//
// var message = "Hello!";
// let age = 25;
//
// // 以下两行都会报错
// const message = "Goodbye!";
// const age = 30;


// const a = [];

// a.push('hello');
// a.length = 0;
// Object.freeze(a);


function tickets(peopleInLine){
  // ...

  let money = 0;
  let payway = [];
  let flag = true;
  peopleInLine.forEach((people) => {
    if(people == 25){
      money += 25;
      payway.push(25);
    }else if(people == 50){
      let index = payway.indexOf(25);
      if(money >= 25 &&  index!== -1){
        money += 25;
        payway.splice(index, 1);
        payway.push(50);
      }else{
        console.log('NO');
        flag = false;
      }
    }else{
      let index = payway.indexOf(25);
      if(money >= 75 &&  index!== -1){
        money += 25;
        payway.splice(index, 1);
        let index_fifty = payway.indexOf(50);
        if(index_fifty !== -1){
          payway.splice(index_fifty, 1);
        }else{
          for(let k = 0; k < 2; k++){
            let index_25 = payway.indexOf(25);
            payway.splice(index_25, 1);
          }
        }
        payway.push(100);
      }else{
        console.log('NO');
        flag = false;
      }
    }
  });
  if (flag == true){
    console.log('YES');
  }
}

tickets([25, 25, 50])