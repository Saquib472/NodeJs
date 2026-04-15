const express = require("express");
const app = express();
const PORT = 8000;

const userRouter = require("./routes/user")
const { connectMongoDb } = require("./connection");
const { logReqRes } = require("./middlewares");

// Connection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1").then(()=>{
  console.log("MongoDB Connected")
})

// Middleware - Plugins
app.use(express.urlencoded({ extended: false }));

// Custom Middileware
app.use((req, res, next) => {         
  console.log("Hello from Middleware One");
  // Modifying the request
  req.mayUserName = "Saquib";
  next();
});

app.use(logReqRes('log.txt'));

// Routes
app.use("/api/users", userRouter)

app.listen(PORT, () => {
  console.log("Server Started...");
});
