/// using ( for in loop )
//Ex 1...
var billgates={Shirt:true,Shirtcolor:"Offwhite",Smill:true,Swater:true,}
for(let props in billgates){
    console.log(props)///property print //(using {property=props})
}

//EX 2...
var billgates1={Shirt:true,Shirtcolor:"Offwhite",Smill:true,Swater:true,}
for (let props in billgates){
    console.log(billgates1[props])///print values
}

//EX 3...
var billgates2={Shirt:true,Shirtcolor:"Offwhite",Smill:true,Swater:true,}
for(let props in billgates2){
    console.log(props+"="+billgates2[props])///print props+values
}
