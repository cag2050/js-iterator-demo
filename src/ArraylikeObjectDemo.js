let obj = {
    0: '000',
    1: '111',
    2: '222',
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
}

// for...of循环调用遍历器接口，数组的遍历器接口只返回具有数字索引的属性---有局限性
for (let item of obj) {
    console.log(item)
}
