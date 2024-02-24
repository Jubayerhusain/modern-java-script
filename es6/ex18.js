//Arrow function
var myArrow=(x)=>{
    console.log(x)
}
myArrow("Jubayer");
////////////////
var myNum=(a)=>{
    return a
}
console.log(myNum(12))
//reasing
var myNum=()=>{
    return 15
}
var myNum=()=>{
    return 14
}

console.log(myNum())

//
var myarrow= (...j)=>{
    return j
}
console.log(myarrow(1,2,3,4,5,6))
//
var Myarrow=(...p)=>{
    console.log(p)
}
Myarrow(15,14,13,19);