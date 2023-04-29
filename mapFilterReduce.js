let arr=[45,23,21]
// console.log(arr)

// creates new array
let a=arr.map((value, index,array )=>{
    // console.log(value,index,array)
    return value+index
})
// console.log(a)

// filter method
let arr2=[43,42,2]
let a2=arr2.filter((a)=>{
    return a<10
})
// console.log(a2)

//reduce method
let arr3=[3,42,2,1]
let reduce_1=(h1,h2)=>{
    return h1+h2
}
let newarr3=arr3.reduce(reduce_1)
let a3=arr3.reduce((h1,h2)=>{
    return h1+h2
})
// console.log(a3)
console.log(newarr3)
