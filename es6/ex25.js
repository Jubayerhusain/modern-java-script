//constractor

class ClassName{

    constructor(){
        console.log("Hello I am form constractor")
    }
}

new ClassName;


////
class myclass {
    constructor(name1,name2){
        console.log(name1,name2)
    }
}
new myclass("Jubayer","Rifat")

///
class className{
    constructor(a,b,c,d,e){
        console.log(a,b,c,d,e)
    }
}
new className(14,15,16,17,18,)


//////////

class ClassNamee{
    constructor(x,y){
        this.number1=x
        this.number2=y
    }
    add(){
        let result=this.number1+this.number2
        console.log(result)
    }

}
var obje=new ClassNamee(100,300);
obje.add()