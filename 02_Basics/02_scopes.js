let a=10
const b=20
var c=30
//console.log(a)
//console.log(b)
//console.log(c)
//{}---scope of the program or function
if(true){
     let a=200
     console.log("INNER:", a)//block scope
}
console.log(a)
function one(){
    const person= "Vaishnavi BOddireddy"
    function two(){
        const  website = "Youtube"
        console.log(person)
    }
    //console.log(website)
    //two()
}
//one()
if (true){
    const person = "Vaishnavi Boddireddy"
    if (person === "Vaishnavi Boddireddy"){
        const website = "YOUTUBE"
        console.log(person+website)
    }
    //console.log(website)---have no access as it is out of the block
}
//console.log(person)---have no access as it is out of the block again
//console.log(addone(5))---when a function/object stored in a variable the assigned function cannot be printed/executed before its initialization
function addone(num){
    return num+1
}
console.log(addTwo(7))
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(7))