const user = {
    username: "Vaishnavi Boddireddy",
    password: 123,
    welcomeMessage: function(){
        console.log(`${this.username}, use the above password to access the repository`)
        //console.log(this)
    }
}
//user.welcomeMessage()
//user.username = "Jashwanth"
//user.welcomeMessage()
//console.log(this)
function Vaishu(){
    //let user = "Vaishnavi Boddireddy"
    console.log(this)
}
Vaishu()
const chai = function(){
    let USERNAME = "Vaishnavi Boddireddy"
    console.log(this.USERNAME)
}
chai()
const chay = () =>{
    let USERNAME = "Vaishnai Boddireddy"
    console.log(this.USERNAME)
    console.log(this)
} 
chay()
//Arroe Function
//Implicit return---code written in same line and its gets executed and gives output
//Explicit return---return keyword is used
//for curly braces "return" keyword is used---returns the values when mentioned with return keyword
//for paranthasis no "return" keyword is used---returns the value directly
//const addTwo = (num1,num2) => {return num1 + num2}
//console.log(addTwo(3,4))
//const addTwo = (num1,num2) =>  (num1 + num2)
const addTw = (num1,num2) =>  (num1 + num2) 
console.log(addTw(3,4))