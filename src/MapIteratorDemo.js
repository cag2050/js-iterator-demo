let map = new Map()

map.set('name', 'jeff')
map.set('age', '18')
map.set('sex', 'male')

// Map 结构遍历时，返回的是一个数组，该数组的两个成员分别为当前 Map 成员的键名和键值。
// 遍历的顺序是按照各个成员被添加进数据结构的顺序。
for (let [key, value] of map) {
    console.log(key + ' : ' + value)
}

for (let arrItem of map) {
    console.log(arrItem)
}

