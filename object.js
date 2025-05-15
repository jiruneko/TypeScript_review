"use strict";
class Cls {
    // コンストラクタ
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    // ゲッタ・セッタ
    get x() {
        return this.x;
    }
    set x(x) {
        this._x = x;
    }
    get y() {
        return this._y;
    }
    set y(y) {
        this._y = y;
    }
    // メソッド
    calc() {
        console.log(this._x + this._y);
    }
}
let cls = new Cls(1, 1);
cls.calc();
cls.x = 10;
cls.y = 11;
cls.calc();
