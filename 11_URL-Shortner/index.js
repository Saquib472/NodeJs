const express = require("express")
const app = express()
const PORT = 8001

const {connectMongoDb} = require("./connection")
const urlRouter = require("./routes/url")

// Connection
connectMongoDb("mongodb://127.0.0.1:27017/url-shortner").then(()=>{
  console.log("MongoDB Connected")
})

app.use("/url", urlRouter)

app.listen(PORT, () => {
  console.log("Server Started");
});