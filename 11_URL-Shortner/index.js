const express = require("express")
const app = express()
const PORT = 8001
const {connectMongoDb} = require("./connection")

// Connection
connectMongoDb("mongodb://127.0.0.1:27017/url-shortner").then(()=>{
  console.log("MongoDB Connected")
})


app.listen(PORT, () => {
  console.log("Server Started");
});