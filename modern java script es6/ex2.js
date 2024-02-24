var javascript={
    name:'JavaScriot',
    libraries:['React', 'Angular', 'Vue'],
    printLibraries:function(){
        this.libraries.forEach(function(a){
            console.log(`${this.name} loves ${a}`);
        });
    }
}
javascript.printLibraries();    

///
var javascript={
    name:'JavaScriot',
    libraries:['React', 'Angular', 'Vue'],
    printLibraries:function(){
        var nm = this;
        this.libraries.forEach(function(a){
            console.log(`${nm.name} loves ${a}`);
        });
    }
}
javascript.printLibraries();  


///
var javascript={
    name:'JavaScriot',
    libraries:['React', 'Angular', 'Vue'],
    printLibraries:function(){
        this.libraries.forEach((a)=>{
            console.log(`${this.name} loves ${a}`);
        });
    },
}
javascript.printLibraries();  