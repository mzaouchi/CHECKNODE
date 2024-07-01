// console.log("Hello NODE")

// function sum(a,b){
//      return a+b
// }

// console.log(sum(5,2))

// var sum=(a,b)=> a+b

// console.log(sum(4,8))

// console.log(process.argv)

// console.log(sum(Number(process.argv[2]),Number(process.argv[3])))

// console.log(sum(+process.argv[2],+process.argv[3]))

var obj = require("./ModuleLocal")
// var Multi = require("./ModuleLocal")

console.log(obj.Sub(5,2))

console.log(obj.Multi(5,2))

