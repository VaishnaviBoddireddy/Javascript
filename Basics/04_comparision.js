//Equality check== and comparisions > < >=<= work differently
//comparisions convert null to a number,treats it as 0(null as o)
//null>=0---true null>0---false
console.log("2">1)
console.log(1>"2")
console.log(null==0)
console.log(null>0)
console.log(null<=0)
//===---strict check
console.log("2"===2)