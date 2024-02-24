//map
/*
var map = new Map();

map.set("key1","Bangladesh");
map.set("key2","India");
map.set("key3","Pakistan");
map.set("key4","Amearica");
map.set("key5","Newyork");
map.set("key6","Vutan");

console.log(map.values[key1]());
console.log(map.key());

//map loop

var namee= new Map();
namee.set("name1","Rifat")
namee.set("name2","Sifat")
namee.set("name3","Abdullah")
namee.set("name4","Saiful")
namee.set("name5","Sefaul")

for(let boysName of namee.values()){
    console.log(boysName);
}
for(let NameNumber of namee.keys()){
    console.log(NameNumber)
}


//using (delete (key))..
var map = new Map();

map.set("key1","Bangladesh");
map.set("key2","India");
map.set("key3","Pakistan");
map.set("key4","Amearica");
map.set("key5","Newyork");
map.set("key6","Vutan");

map.delete("key1")

for( let mapvalue of map.values()){
    console.log(mapvalue)
}



//using clear() methord..

let map=new Map();
map.set("key1","Rifat")
map.set("key2","Sifat")
map.set("key3","Abdullah")
map.set("key4","Rahim")
map.set("key5",'Sanjidur')

map.clear();

for(let namee of map.values()){
    console.log(namee)
}

//using get(key)...
let map=new Map();
map.set ("key1","Saiful")
map.set ("key2","Sefaul")
map.set ("key3","Rifat")
map.set ("key4","Jubayer")
map.set ("key5","Sanjidur")

console.log(map.get('key1'));
*/

//using has methord...
let map=new Map();
map.set ("key1","Saiful")
map.set ("key2","Sefaul")
map.set ("key3","Rifat")
map.set ("key4","Jubayer")
map.set ("key5","Sanjidur")

if(map.has("key1")){
    console.log('True')
}
else{
    console.log("false")
}


