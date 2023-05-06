const mongoose=require("mongoose")
require("dotenv").config()

const connection=mongoose.connect(process.env.mongoURL)

module.exports={
    connection,
    API_KEY:'a5df3f1633mshdf1e3698d92ca27p129f71jsn3909b8d3b20a'
}