function add(a: number, b:number): number {
    return a + b
}
console.log(1, 2)

function shout(s: string): void {
    console.log(`${s}!`);    
}
shout('hoge')

let zuga = function(): void {
    console.log('zuga')
}
zuga()

let dokyu = (x: string): string => {
    return x + x
}
console.log('piyo');

function fnc1(x: number = 1): number {
    return x + 1
}
console.log(fnc1())
console.log(fnc1(10))

function fnc2(x?: number): number {
    return 2 * (x === undefined ? 1 : x)
}
console.log(fnc2(10))

function fnc3(...x: number[]): number {
    let res: number = 0
    x.forEach((i: number): void => {
        res += i
    })
    return res
}
console.log(fnc3())
console.log(fnc3(1,2,3));

// オーバーロード
function fnc(x: string): string
function fnc(x: number, y: number): number
function fnc(x: boolean): void

function fnc(x: any, y?: number): any {
    if (typeof x === 'string') {
        return `${x}!`
    } else if (typeof x === 'number') {
        return x + (y === undefined ? 1 : y)
    } else {
        if (x) console.log('fuga')
    }
}

console.log(fnc('hoge'))
console.log(fnc(1, 2))
fnc(true)
