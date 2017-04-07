/**
 * Created by alfredlau on 2017/3/14.
 */

// function createComparsionFunction(propName) {
//     return function(v1, v2) {
//         let p1 = v1[propName]
//         let p2 = v2[propName]

//         if (p1 > p2) {
//             return 1
//         } else if (p1 < p2) {
//             return -1
//         } else {
//             return 0
//         }
//     }
// }

// let data = [{ name: 'alf', age: 14 }, { name: 'nig', age: 12 }]

// data.sort(createComparsionFunction('name'))
// console.log(data[0].name);


// data.sort(createComparsionFunction('age'))
// console.log(data[0].age);


// let pattern = /[cat]at/g
// console.log(pattern.source);  //[cat]at
// let target = 'thisisatfirstata'

// console.log(pattern.test(target))
// console.log(pattern.global);
// console.log(pattern.ignoreCase);

//


// function sum(num1,  num2){
//     return num1 + num2;
// }

// function callSum1(num1, num2) {
//     return sum.apply(this, arguments);
// }

// function callSum2(num1, num2) {
//     return sum.apply(this, [num1, num2]);
// }

// function callSum3(num1, num2){
//     return sum.call(this, num1, num2);
// }

// console.log(callSum1(10, 10));
// console.log(callSum2(10, 10));
// console.log(callSum3(10, 10));

// window.color = 'red'
// var o = {color: 'blue'}

// function sayColor() {
//     console.log(this.color);
// }

// sayColor()

// sayColor.call(this)
// sayColor.call(window)
// sayColor.call(o)


//  bind func

// var o = {
//     color: 'red'
// }

// function sayColor() {
//     console.log(this.color);
// }

// var otherSayColor = sayColor.bind(o)
// otherSayColor()


// console.log(typeof 'name');
// console.log(typeof 234);
// console.log(typeof false);


// console.log('obj'.substring(2));

// var stringVal = 'test code '
// console.log(stringVal.charAt(3));

// var booleanObj = new Boolean(true)
// console.log(booleanObj);
//
// var num = 10;
// console.log(num.toPrecision(1));
// console.log(num.toFixed(2))
//
// var stringObj = new String('test code')
// console.log(stringObj.length)

// var str = 'hello, world'
// eval("console.log(str)")
//
// var arr = [1, 8, 2, 7]
// console.log(Math.max.apply(Math, arr))
//
// console.log(Math.floor(Math.random() * 10))
//
// var proto = function () {
// }
//
// proto.age = 16
// proto.name = 'alf'
//
// console.log(proto.hasOwnProperty('name'))
// console.log(proto.hasOwnProperty('al'))
//
// delete proto.name
// console.log(proto.hasOwnProperty('name'))


// var util = require('util')
// console.log(util.inspect(proto.__proto__))

// function output(count) {
//     // 模仿块级作用域
//     (function () {
//         for(var i = 0; i < count; i++){
//             console.log(i)
//         }
//     })()
// }
//
// output(6)

// function Person(name) {
//     this.getName = function () {
//         return name
//     };
//     this.setName = function (val) {
//         name = val
//     };
// }
//
// var p1 = new Person('Nig')
// console.log(p1.getName())
//
//
// var leftPos = (typeof window.screenLeft == 'Number') ? window.screenLeft : window.screenX;
// var topPos = (typeof window.screenTop == 'Number') ? window.screenTop : window.screenY;
//
// console.log(leftPos)
// console.log(topPos)

// 页面视口大小,区别于浏览器窗口大小(screenTop/screenY,screenLeft/screenX)
//
// var pageWidth = window.innerWidth
// var pageHeight = window.innerHeight
//
// if (typeof pageWidth !== 'number'){
//     if (document.compatMode == 'CSS1Compat'){
//         pageWidth = document.documentElement.clientWidth
//         pageHeight = document.documentElement.clientHeight
//     }else {
//         pageWidth = document.body.clientWidth
//         pageHeight = document.body.clientHeight
//     }
// }

// setTimeout(function () {
//     console.log('hello, world')
// }, 3000)

//
// function getQueryStringArgs() {
//     var qs = (location.search.length > 0 ? location.search.substring(1) : '');
//     var args = {}
//     var items = qs.length ? qs.split('&') : []
//     var item = null
//     var name = null
//     var value = null
//     var i = 0
//     var len = items.length
//
//     for(i; i < len; i++){
//         item = items[i].split('=')
//         name = decodeURIComponent(item[0])
//         value = decodeURIComponent(item[1])
//         if (name.length){
//             args[name] = value
//         }
//     }
//     return args
// }
//
// console.log(getQueryStringArgs())

var div = document.createElement('div')
var attr = document.createAttribute('data-appid')
attr.value = '123456'
div.setAttributeNode(attr)
div.title = 'Nic'

alert(div.title)
alert(div.dataset.appid)