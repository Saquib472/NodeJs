const URL = require("../models/url")
const { nanoid } = require("nanoid")

async function handleGenerateNewShortURL(req, res) {
    const shortId = nanoid(8)
    const body = req.body
    if(!body.url) return res.status(400).json({ error : "url is missing"})
    const result = await URL.create({
        shortId : shortId,
        redirectURL : body.url,
        visitHistory : [],
        createdBy : req.user._id
    })
    return res.redirect(`/?id=${shortId}`)
    // return res.status(201).json({ id : shortId, message : " Short ID creared successfully"})
}

async function handleRedirectToOgURL(req,res){
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
    if (!entry) {
        return res.status(404).send("Short URL not found");
    }
    return res.redirect(entry.redirectURL)
}

async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId
    const result = await URL.findOne({ shortId })
    return res.json({ totalClicks : result.visitHistory.length , analytics : result.visitHistory})
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
    handleRedirectToOgURL
}