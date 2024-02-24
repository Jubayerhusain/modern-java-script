///rest peramitter 
function caculation(...summation){
    sum=0
    for(let i of summation){
        sum=sum+i
    }
console.log(sum)
}
caculation(8,5,4,2,5,2,52,)

////////////////////////////////

function caculation(...number){
    sum=0
    for(let i of number){
        sum=sum+i
    }
console.log(sum)
}
caculation(45,23,34,54)

////name

function student (...name){
    nam="student_Name : "
    for(let i of name){
        nam=nam+i
    }
console.log(nam)
}
student('Rifat',",",'Sifat',",",'Raihan')

////rest peramitter with some peramitter 

function summe(a,b,...num){
    sum=0
    for(let i of num){
        sum=sum+i
    }
console.log(sum)

}
summe(12,14,52,45,25,15,)

///////////////////
function summet(y,z,...numb){
    sum=0+y+z
    for(let i of numb){
        sum=sum+i
    }
console.log(sum)

}
summet(12,14,52,45,25,15,)