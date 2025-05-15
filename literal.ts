let obj: {
    a: number
    b: string
    c?: boolean
}

// シグネチャに合致するオブジェクトリテラルの代入
obj = {
    a: 999,
    b: 'hoge',
    c: false
}

// オプションを省略したオブジェクトリテラルの代入
obj = {
    a: 999,
    b: 'hoge'
}

// メソッドシグネチャを含めたオブジェクト型の宣言