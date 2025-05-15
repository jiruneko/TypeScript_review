let hoge: string = "hoge"
let huga: string = "huga"

const PIYO: boolean = false

console.log(hoge)
console.log(huga);
console.log(PIYO);

let arr1: string[] = ['hoge', 'huga', 'piyo']
let arr2: Array<number> = [1, 2, 3]
let arr3 = [10, 20, 30]
let arr4 = []

arr1.push('boo')
arr1.unshift('xxx')
console.log(arr1)
console.log(arr1.reverse())
console.log(arr1[2])

let tpl: [string, number, boolean] = ['hoge', 999, true]

console.log(tpl[1])

tpl[0] = 'fuga'
console.log(tpl);

let userId: number | string

userId = 999
userId = '001'
// userId = true

if (typeof(userId) == 'string') {
    console.log('string')
} else if (typeof(userId) == 'number') {
    console.log('number')
} else {
    console.log('other')
}

enum Color {
    RED,
    GREEN,
    BLUE
}

console.log(Color.RED)
console.log(Color.GREEN)
console.log(Color.BLUE)

