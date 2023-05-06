const mongoose=require("mongoose")

const noteSchema=mongoose.Schema({
    
        "airline":String,
        "origin":String,
        "destination":String,
        "date":String,
        "price":Number,
})
const NoteModel=mongoose.model("flights",noteSchema)
module.exports={
    NoteModel
}