"use strict";
function add(a, b) {
    return a + b;
}
console.log(1, 2);
function shout(s) {
    console.log(`${s}!`);
}
shout('hoge');
let zuga = function () {
    console.log('zuga');
};
zuga();
let dokyu = (x) => {
    return x + x;
};
console.log('piyo');
function fnc1(x = 1) {
    return x + 1;
}
console.log(fnc1());
console.log(fnc1(10));
function fnc2(x) {
    return 2 * (x === undefined ? 1 : x);
}
console.log(fnc2(10));
function fnc3(...x) {
    let res = 0;
    x.forEach((i) => {
        res += i;
    });
    return res;
}
console.log(fnc3());
console.log(fnc3(1, 2, 3));
function fnc(x, y) {
    if (typeof x === 'string') {
        return `${x}!`;
    }
    else if (typeof x === 'number') {
        return x + (y === undefined ? 1 : y);
    }
    else {
        if (x)
            console.log('fuga');
    }
}
console.log(fnc('hoge'));
console.log(fnc(1, 2));
fnc(true);
