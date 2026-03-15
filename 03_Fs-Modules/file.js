const fs = require("fs")

//Creating a file named text.txt and wrtting in it Syncronously.
fs.writeFileSync("./text.txt", "Hey there")

//Creating a file named text.txt and wrtting in it Asyncronously.
fs.writeFile("./text2.txt", "Hey there Async" , (err)=> {})

//Reading a file Content in sync way
const result = fs.readFileSync("./contact.txt", "utf-8")
console.log(result)

//Reading a file Content in Async way
fs.readFile("./contact.txt", "utf-8", (err, result)=>{
    if(err) return
    console.log(result)
})

//Append data in Sync way.
fs.appendFileSync("./contact.txt", `${Date.now()} Hey There\n`)

//Copy file
// fs.cpSync("./text.txt", "./copyTxt.txt")

//Delete file
// fs.unlinkSync("./copyTxt.txt")

//Finding Stat of a file
const stat = fs.statSync("./text.txt")
console.log(stat)

//Make Directory/Folder
fs.mkdirSync("my-Docs")