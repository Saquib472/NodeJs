const USER = require("../models/user")
const { v4 : uuidv4 } = require("uuid")
const { setUser } = require("../service/auth")

async function handleUserSignUp(req,res){
    const { name,email,password } = req.body
    const user = await USER.create({
        name,
        email,
        password
    })
    const sessionId = uuidv4()
    setUser(sessionId, user)
    res.cookie("uid",sessionId)
    res.redirect("/")
}

async function handleUserLogin(req,res){
    const { email,password } = req.body
    const user = await USER.findOne({email, password})
    if(!user) return res.render("login", {
        error : "email or password is invalid"
    })
    const sessionId = uuidv4()
    setUser(sessionId, user)
    res.cookie("uid",sessionId)
    res.redirect("/")
}

module.exports = {
    handleUserSignUp,
    handleUserLogin
}