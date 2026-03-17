//primitive
//non primitive/ reference---arrays, objects, functions
//const heros = ["hanuman", "shiva"]


//let myObj={
    //name: "vaishnavi boddireddy",
   // age: 25,
//}


 //const myFunction=function(){
   // console.log("JavaScript")
 //}
//7 types:String, Number, Boolean, Null, Undefined, Symbol, Integer(bigInt)
//const score=100/false/true/"vaishnavi"/undefined/Symbol(value)/10.3/null
//console.log(typeof myFunction);


//memory types
//stack(primitive---gets a copy of original), Heap(Non-primitive---gets the reference for original)

let myYoutubename = "Vaishnavi Boddireddy"
let anothername = myYoutubename
anothername = "Boddireddy"
console.log(myYoutubename)
console.log(anothername)

let userOne={
   emailId: "vaishnavi@google.com",
   upi: "vaishnavi@ybl"
}
let userTwo = userOne
userTwo.emailId = "boddireddy@google.com"
console.log(userOne)
console.log(userTwo.emailId)