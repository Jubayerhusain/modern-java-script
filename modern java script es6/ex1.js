//normal funcion...
function functionName () {
    return 10    
}
console.log(functionName())
//fat arrow...
var name=()=> {
    return 12;
}
console.log(name())

// single statement er khette...

var nm=()=>13;
console.log(nm())

var number1=(c,d)=>{
    a=c+d;
}
number1(15,19);
console.log(a);

var number=(a,b)=>a+b;
console.log(number(10,15))