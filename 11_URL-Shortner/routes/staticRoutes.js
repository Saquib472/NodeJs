const express = require("express")
const router = express.Router()
const URL = require("../models/url")

router.get("/", async(req,res)=>{
    const id = req.query.id
    const user = req.user
    const allURL = await URL.find({createdBy : req.user?._id})
    if (id){
        res.render("home", {
            urls : allURL,
            id : id
        })
    }
    res.render("home", {
        urls : allURL
    })
})

router.get("/signup", async(req,res)=>{
    res.render("signUp")
})

router.get("/login", async(req,res)=>{
    res.render("login")
})

module.exports = router