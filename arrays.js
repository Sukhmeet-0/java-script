let marks=[2,3,4,false,null]
console.log(marks)
console.log(marks[3])
console.log(marks.length)
marks[3]=99;
console.log(marks)
let b=marks.toString()
console.log(typeof b)
console.log(typeof(marks))
let c=marks.join(" and ")
console.log(c)
let r=marks.pop()
let m=marks.push(56)
console.log(marks)
let d=marks.shift()
console.log(d)
console.log(marks.unshift(0))
console.log(marks)
delete marks[3]
console.log(marks.length)
let t=[0,1,2]
console.log(marks.concat(t).sort())
console.log(marks.splice(t))  
console.log(marks.slice(1,3))