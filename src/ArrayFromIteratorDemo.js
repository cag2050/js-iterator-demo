let arrayLike = { length: 2, 0: 'a', 1: 'b' };

// 报错
// for (let x of arrayLike) {
//     console.log(x);
// }

// 正确
// for...of循环调用遍历器接口，数组的遍历器接口只返回具有数字索引的属性---有局限性
for (let x of Array.from(arrayLike)) {
    console.log(x);
}