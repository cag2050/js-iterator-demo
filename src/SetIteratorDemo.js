let set = new Set(['jeff', 'john', 'tom'])

// Set 结构遍历时，返回的是一个值
// 遍历的顺序是按照各个成员被添加进数据结构的顺序。
for (let item of set) {
    console.log(item)
}