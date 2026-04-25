const express = require("express")
const app = express()
const PORT = 8001

const {connectMongoDb} = require("./connection")
const urlRouter = require("./routes/url")
const URL = require("./models/url")

// Connection
connectMongoDb("mongodb://127.0.0.1:27017/url-shortner").then(()=>{
  console.log("MongoDB Connected")
})

// Middleware - Plugins
// app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.get("/:shortId", async(req,res)=>{
  const shortId = req.params.shortId
  const entry = await URL.findOneAndUpdate(
    {
      shortId
    }, 
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        }
      }
    }
  )
  return res.redirect(entry.redirectURL)
})

app.use("/url", urlRouter)

app.listen(PORT, () => {
  console.log("Server Started");
});