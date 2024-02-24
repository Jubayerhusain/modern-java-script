//inheritense

class ParentClass {
    name1(){
        console.log("Abu-Said")
    }
    name2(){
        console.log("Junaid")
    }
}
/*
var obj=new ParentClass();
obj.name1()
obj.name2()
*/
class Childclass extends ParentClass {
    
}
var obj=new Childclass();
obj.name1()
obj.name2()

////

class Country {
    DivisionName(name){
        console.log(name)
    }
    DivisionName1(name){
        console.log(name)
    }
    DivisionName2(name){
        console.log(name)
    }
    DivisionName3(name){
        console.log(name)
    }
    DivisionName4(name){
        console.log(name)
    }
}
class  Countrypro extends Country{
    DivisionName3(){
        console.log("Mymensingh ")
    }
}
var obj=new Countrypro();
obj.DivisionName("Rangpur")
obj.DivisionName1("Dhaka")
obj.DivisionName2("Chattogram")
obj.DivisionName3("Rajshahi")
obj.DivisionName4("Khulna")

// using Super keyword
class ParentClasss {
    nm(){
        console.log("Abdullah")
    }
    nm1(){
        console.log("Saiful")
    }
    nm2(){
        console.log("Jahid")
    }
    nm3(){
        console.log("Jubaidur")
    }
}
class ChildClasss extends ParentClasss {
    demo(){
        super.nm()
        super.nm1()
    }
}
var obj= new ChildClasss();
obj.demo();