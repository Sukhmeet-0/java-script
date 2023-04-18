for(let i=0;i<11;i++){
    console.log(i);
}
let ob={
    name:"sam",
    age:21,
    city:"Batala"
}
for(let a in ob){
    console.log(a, ob[a]);
}
for(let b of "Sukhmeet"){
    console.log(b);
}

let c=0;
while(c!=10){
    console.log("Hello");
    c++;
}
c=0;
do{
    console.log("Hi");
    c++;
}while(c!=10);