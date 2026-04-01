const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;
const fs = require("fs");
const mongoose = require("mongoose");

// Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/youtube-app-1")
  .then(() => console.log("MongoDB Connected"))
  .catch((err)=> console.log("Failed to Connect to MongoDB", err))

// Defining Schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
  },
  gender: {
    type: String,
  },
}, {timestamps : true});

//Creating Model
const User = mongoose.model("user", userSchema);

// Middleware
app.use(express.urlencoded({ extended: false }));

// Custom Middileware
app.use((req, res, next) => {
  console.log("Hello from Middleware One");
  // Modifying the request
  req.mayUserName = "Saquib";
  next();
});

app.use((req, res, next) => {
  console.log("Hello from Middleware Two", req.mayUserName);
  // res.json({msg : "Hey from Mddleware Two"})
  fs.appendFile(
    "log.txt",
    `\n${Date.now()}: ${req.ip} ${req.method}: ${req.path}`,
    (err, data) => {
      next();
    },
  );
});

//Routes
app.get("/users", (req, res) => {
  const Users = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
  return res.send(Users);
});

app.get("/api/users", (req, res) => {
  res.setHeader("X-MyName", "Saquib Ali"); // Custom Header , Always add X- to it.
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) return res.status(404).json({ error: "user not found" });
    return res.json(user);
  })
  .patch((req, res) => {
    //Edit the user with id
    const id = Number(req.params.id);
    const body = req.body;
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, ...body } : user,
    );
    fs.writeFile(
      "./MOCK_DATA.json",
      JSON.stringify(updatedUsers),
      (err, data) => {
        return res.json({ status: "User Updated..", id: id });
      },
    );
  })
  .delete((req, res) => {
    //Delete the user with id
    const id = parseInt(req.params.id);
    const updatedUsers = users.filter((user) => user.id !== id);
    fs.writeFile(
      "./MOCK_DATA.json",
      JSON.stringify(updatedUsers),
      (err, data) => {
        return res.json({ status: "User Deleted..", id: id });
      },
    );
  });

app.post("/api/users", async (req, res) => {
  // User creation
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  )
    return res.status(400).json({ error: "All fields are required" });
  // users.push({ id: users.length + 1, ...body });
  // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
  //   return res.status(201).json({ status: "User Created..", id: users.length });
  // });
  const result = await User.create({
    firstName : body.first_name,
    lastName : body.last_name,
    email : body.email,
    gender : body.gender,
    jobTitle : body.job_title
  })
  return res.status(201).json({ status: "User Created.." });
});

app.listen(PORT, () => {
  console.log("Server Started...");
});
