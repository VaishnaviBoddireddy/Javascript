console.log("V")
console.log("a")
console.log("i")
console.log("s")
console.log("h")
console.log("n")
console.log("a")
console.log("v")
console.log("i")
function sayMyName(){
    console.log("V")
    console.log("a")
    console.log("i")
    console.log("s")
    console.log("h")
    console.log("n")
    console.log("a")
    console.log("v")
    console.log("i")
}
//console.log(sayMyName)---general way for printing a code
//sayMyName---Reference
//sayMyName()---Execution
sayMyName()
function addNames(name1,name2){
    console.log(name1+name2)
}
addNames("vaishnavi","boddireddy")
addNames("vaishnavi",5)
function practice (FullStack){
    //practice("Full Stack Web Development")
    console.log(FullStack)
}
//console.log(practice)
practice("Full Stack Web Development")
//printing statement should be inside function defination
//the content which is to be printed should be out of the function defination
//reference of the function won't give any output and once the reference function gets executed we get the result of the function
function loggedInUserMessage(username){
    //if(username===undefined){
        //console.log("please enter a username")
        //return
      if(!username){
        console.log("please enter username")
        return
      }
    //}
    return `${username} just logged in`
}
console.log(loggedInUserMessage())
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,4000,6000))
//(...function name)---rest operator which helps in printing the complete values in the given or working function
//const user = {
    //username: "Vaishnavi Boddireddy",
    //password: "123"
//}
//function handleObject(){
    //console.log(`Username is ${anyobject.username} and securitypin is ${anyobject.password}`)
//}
//console.log(`Username is ${username} and password is ${password}`)