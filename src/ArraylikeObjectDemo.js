let obj = {
    0: '000',
    1: '111',
    2: '222',
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
}

for (let item of obj) {
    console.log(item)
}
