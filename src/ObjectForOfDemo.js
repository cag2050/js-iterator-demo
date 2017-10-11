let obj = {name: 'jeff', age: 20, sex: 'male'}

// 对于普通的对象，for...in循环可以遍历键名，for...of循环会报错(因为没有部署 Iterator 接口)。
// 一种解决方法是，使用Object.keys方法将对象的键名生成一个数组，然后遍历这个数组。
for (let key of Object.keys(obj)) {
    console.log(key + ' : ' + obj[key])
}