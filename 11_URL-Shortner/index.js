const express = require("express")
const app = express()
const PORT = 8001

const {connectMongoDb} = require("./connection")
const urlRouter = require("./routes/url")
const path = require("path")
const staticRoutes = require("./routes/staticRoutes")
const { handleRedirectToOgURL } = require("./controllers/url")
const userRouter = require("./routes/user")
const cookieParser = require("cookie-parser")
const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth")

// Connection
connectMongoDb("mongodb://127.0.0.1:27017/url-shortner").then(()=>{
  console.log("MongoDB Connected")
})

// Setting Up the EJS
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

// Middleware - Plugins
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())

// Server Side Rendering
// app.get("/test", async(req,res)=>{
//   res.render("home")
// })

// Routing
app.use("/",checkAuth, staticRoutes)
app.use("/url",restrictToLoggedinUserOnly, urlRouter)
app.use("/user", userRouter)

app.get("/:shortId", handleRedirectToOgURL);

app.listen(PORT, () => {
  console.log("Server Started");
});