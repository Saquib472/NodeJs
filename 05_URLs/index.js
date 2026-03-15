const http = require("http")
const fs = require("fs")
const url = require("url")

const myServer = http.createServer((req,res)=>{
    if(req.url === "/favicon.ico") return res.end("")
    const urlData = url.parse(req.url, true)
    console.log(urlData)
    const log = `${Date.now()}: Path: ${req.url} : New Request Recieved\n`
    fs.appendFile("./log.txt", log, (err,data)=>{
        switch (urlData.pathname) {
            case "/":
                res.end("Home Page")
                break;
            case "/about":
                const name = urlData.query.myName
                res.end(`Hi ${name}`)
                break;
            default:
                res.end("404 Not Found")
                break;
        }
    })
})

myServer.listen(8000, ()=>{console.log("Server Started...")})