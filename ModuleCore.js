// const fs = require("fs")

// console.log("Debut")

// fs.readFile('./test.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// console.log(fs.readFileSync("./test.txt",'utf-8'))

// console.log("Fin")


const http = require("http")

http.createServer((req,res)=>{
    res.write('<h1>Si ACHREF</h1>')  
    res.end()
}).listen(5000, console.log(`Server is running 5000`))