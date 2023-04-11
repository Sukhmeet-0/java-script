const prompt=require("prompt-sync")({sigint:true})
let a=prompt("Whats your age? ")
a=Number.parseInt(a)
console.log((a))
// if(a>18){
//     alert("Valid !!")

// }else if(a<18 && a> 13){
//     alert("you can drive after 18years of age")
// }
// else{
//     alert("Not valid!!")
// }
a<18?console.log("Not valid"):console.log("valid");

// switch case
