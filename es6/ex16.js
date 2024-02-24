//function return

function FunOne(){
    return 100;
}

function FunTwo(){
    return 140;
}
console.log(FunOne()+FunTwo())
//////////////////
function Name(){
    return 'Bangladesh';
}
console.log(Name())
///////////////////
function funOne(){
    return 20;
}

function funTwo(){
    return funOne();
}
console.log(funTwo())
///////////////////
function num1(){
    return 40;
}
function num2(){
    return 50;
}
function num3(){
    return  80;
}
function sum(){
    return num1()+num2()+num3();
}
console.log(sum())