class Cls {
    // コンストラクタ
    constructor(private _x:number, private _y:number) {
    }

    // ゲッタ・セッタ
    get x(): number {
        return this.x
    }
    set x(x: number) {
        this._x = x
    }
    get y(): number {
        return this._y
    }
    set y(y: number) {
        this._y = y
    }

    // メソッド
    calc(): void {
        console.log(this._x + this._y)
    }
}

let cls = new Cls(1, 1)
cls.calc()
cls.x = 10
cls.y = 11
cls.calc()

class Js {
    constructor(private name: string) {
    }
        public hello(): string {
            return 'Hello' + this.name
    }
}

// クラスの継承
class Ts extends Js {
    constructor() {
        super("TypeScript")
    }

    public hello(): string {
        return super.hello() + '!!!'
    }
}

let ts = new Ts()
console.log(ts.hello());

// 抽象クラス
abstract class Human {
    abstract hello(msg: string): string
}

class Man extends Human {
    public hello(msg: string): string {
        return msg + 'だぜ！'
    }
}

let man = new Man()
console.log(man.hello('こんにちは'))

// インターフェース
interface Human2 {
    name: string
    age?: number
    afternoon(msg: string): string
}

class Shiro implements Human2 {
    constructor(public name: string) {
    }

    public afternoon(msg: string): string {
        return `${msg}、${this.name}です`
    }
}

let shiro = new Shiro('jiruneko')
console.log(shiro.afternoon('こんにちは'))