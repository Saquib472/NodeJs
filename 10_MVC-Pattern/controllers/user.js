const User = require("../models/user")

async function handleGetAllUsers(req, res){
    const users = await User.find({})
    return res.json(users);
}

async function handleGetUserById(req,res){
    const id = req.params.id
    const user = await User.findById(id)
    if (!user) return res.status(404).json({ error: "user not found" });
    return res.json(user);
}

async function handleUpdateUserById(req, res){
    //Edit the user with id
    const id = req.params.id
    const body = req.body;
    await User.findByIdAndUpdate(id, {...body})
    return res.json({status : "User Updated", id: id})
}

async function handleDeleteUserById(req, res) {
    //Delete the user with id
    const id = req.params.id
    await User.findByIdAndDelete(id)
    return res.json({status : "User Deleted"})
}

async function handleCreateNewUser(req, res){
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

  const result = await User.create({
    firstName : body.first_name,
    lastName : body.last_name,
    email : body.email,
    gender : body.gender,
    jobTitle : body.job_title
  })
  return res.status(201).json({ status: "User Created..", id: result._id });
}


module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}