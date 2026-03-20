//singleton
//object.create
//object literals
const JsUser = {
    name: "Vaishnavi Boddireddy",
    age: 25,
    location: "Warangal",
    email: "vaishnavi@google.com",
    isLoggedIn: false,
    lastLoginDays:["Tuesday", "Wednesday"]
}
console.log(JsUser.lastLoginDays)
console.log(JsUser["email"])
console.log(JsUser["age"])
JsUser.greeting = function(){
    console.log("Hello Js User")
}
console.log(JsUser.greeting)
//myArray = ["v", "i"]
//myArray[1]
//const tinderUser = new Object()---singleton object
const tinderUser = {}//---non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "Vaishnavi Boddireddy"
tinderUser.isLoggedIn = false
console.log(tinderUser)
const regularUser = {
    email: "vaishnavi@techmahindra.com",
    fullname: {
            username: {
                firstname: "vaishnavi",
                lastname: "Boddireddy"
            }
    }
}
console.log(regularUser)
console.log(regularUser.email)
console.log(regularUser.fullname)
console.log(regularUser.fullname.username)
console.log(regularUser.fullname.username.firstname)
console.log(regularUser.fullname.username.firstname.lastname)
const obj1 = {1: "a", 2: "b"}
console.log(obj1)
const obj2 = {3: "a", 4: "b"}
const obj3 = {obj1,obj2}
console.log(typeof obj3)
const course = {
    coursename: "Javascript for pratham",
    fee: "free",
    trainer: "self"
}
console.log(typeof course)
console.log(course)
//JSON
//{
    //"name": "vaishnavi Boddireddy",
    //"course": "javascript for pratham",
    //"fee": "free"
//}
//url:https://api.github.com/users/hiteshchoudhary
//{
  //"login": "hiteshchoudhary",
  //"id": 11613311,
  //"node_id": "MDQ6VXNlcjExNjEzMzEx",
  //"avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
  //"gravatar_id": "",
  //"url": "https://api.github.com/users/hiteshchoudhary",
  //"html_url": "https://github.com/hiteshchoudhary",
  //"followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
  //"following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  //"gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  //"starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  //"subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
  //"organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
  //"repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
  //"events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  //"received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
  //"type": "User",
  //"user_view_type": "public",
  //"site_admin": false,
  //"name": "Hitesh Choudhary",
  //"company": null,
  //"blog": "https://hitesh.ai",
  //"location": "India",
  //"email": null,
  //"hireable": null,
  //"bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  //"twitter_username": "hiteshdotcom",
  //"public_repos": 120,
  //"public_gists": 5,
  //"followers": 55758,
  //"following": 0,
  //"created_at": "2015-03-23T13:03:25Z",
  //"updated_at": "2026-03-16T18:36:23Z"
//}
//JSON Formatter---TOOL
//random user me api---application
