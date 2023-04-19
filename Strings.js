let name="harry"
console.log(name.length)
console.log(name)

let lastname='singh'
console.log(lastname)
console.log(name[0])

let boy='prmod'
let boy2='nikhil'

let sentence=`${boy} is a friend of ${boy2}`
console.log(sentence)
console.log(name.slice(0,2))
console.log(name.slice(2))
console.log(name.replace("har","Per"))
console.log(name.concat(" is first name of",lastname," ok"))
console.log(name.concat(" ",lastname))
let a="   sam  "
console.log(a.trim())
console.log(a)



const sen="the quick brown fox jumps over lazy dog"
const word='fox'
console.log(sen.includes(word))
console.log(`the word "${word}" ${sen.includes(word)? ' is' : 'is not'} in the sentence`)
console.log(word.toLowerCase())
console.log(word.toUpperCase())
let str="Please give me 1000"
let amount =str.slice("Please give me ".length)
console.log(amount)
