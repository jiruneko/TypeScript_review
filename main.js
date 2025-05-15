"use strict";
let hoge = "hoge";
let huga = "huga";
const PIYO = false;
console.log(hoge);
console.log(huga);
console.log(PIYO);
let arr1 = ['hoge', 'huga', 'piyo'];
let arr2 = [1, 2, 3];
let arr3 = [10, 20, 30];
let arr4 = [];
arr1.push('boo');
arr1.unshift('xxx');
console.log(arr1);
console.log(arr1.reverse());
console.log(arr1[2]);
let tpl = ['hoge', 999, true];
console.log(tpl[1]);
tpl[0] = 'fuga';
console.log(tpl);
let userId;
userId = 999;
userId = '001';
// userId = true
if (typeof (userId) == 'string') {
    console.log('string');
}
else if (typeof (userId) == 'number') {
    console.log('number');
}
else {
    console.log('other');
}
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
console.log(Color.RED);
console.log(Color.GREEN);
console.log(Color.BLUE);
