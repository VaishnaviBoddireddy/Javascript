//Array

const myArr = [0,1,2,3,4,5,true,"Vaishnavi Boddireddy"]
//console.log(myArr)
//const Arr1 = new Array ("vaishnavi", "navya", "latha", "srinivas reddy")
//console.log(Arr1)
// Array Methods
//myArr.push(6)
//myArr.pop()//removes the particular value at the last position
//myArr.unshift(7)//adds the value at the starting of the array
//myArr.shift()//removes the value which added to array in the unshift operation
//console.log(myArr.toString())
//console.log(myArr.includes(11))
//console.log(myArr.indexOf(4))
//console.log(myArr.slice(1,3))//divides the values based on given indexes of the array
//console.log(myArr.splice(0,2))//removes the values based on the given indexes of the array
//console.log(myArr)
// slice, splice
const shiva = ["shiva", "parameshwar", "namah"]
const hanuman = ["hanuman", "vayuputra", "anjanaputhra"]
//shiva.push(hanuman)
//console.log(shiva)
//console.log(shiva[3][2])
const single = shiva.concat(hanuman)
console.log(single)
console.log(Array.isArray("vaishnavi boddireddy"))
console.log(Array.from("vaishnavi boddireddy"))
//isArray, from, of