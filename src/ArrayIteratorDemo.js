let arr = [1, 2, 3]
// 变量arr是一个数组，原生就具有遍历器接口，部署在arr的Symbol.iterator属性上面。所以，调用这个属性，就得到遍历器对象。
let iterator = arr[Symbol.iterator]()

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// Iterator 的2种遍历方法：
// 遍历方法1：使用 while循环
let next = iterator.next()
while (!next.done) {
    console.log(next.value)
    next = iterator.next()
}
// 遍历方法2：使用 for...of
for (let item of arr) {
    console.log(item)
}