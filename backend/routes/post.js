const express = require("express")
const { NoteModel } = require("../model/Post.model")
const noteRouter = express.Router()

 noteRouter.get("/", async (req, res) => {
 const flightsData = await NoteModel.find()
 res.send(flightsData)
 })

noteRouter.post("/add", async (req, res) => {
    const payload = req.body
    const note = new NoteModel(payload)
    await note.save()
    res.send({ "msg": "Node Created" })
}) 

noteRouter.get("/:origin/:destination/:date", async (req, res) => {
    const { origin, destination, date } = req.params
    const prices = await NoteModel.find({ 
        origin: new RegExp(`^${origin}$`, "i"),
        destination: new RegExp(`^${destination}$`, "i"),
        date
    })
    res.json(prices)
})
module.exports={
    noteRouter
}