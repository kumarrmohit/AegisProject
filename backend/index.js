const express=require("express")
const {connection}=require("./config/db")
const {userRouter}=require("./routes/user")
const {noteRouter} = require("./routes/post")
const{authenticate}=require("./middleware/authentication")
const cors=require("cors")
require("dotenv").config()  

const app=express()

app.use(express.json())

app.use(cors())

app.get("/",(req,res)=>{
    res.send("HOME PAGE") 
})

app.use("/users",userRouter)
app.use(authenticate)
app.use('/flights',noteRouter);



app.listen(process.env.port,async()=>{
    try{
        await connection
    }
    catch(err){
        console.log(err.message)
    }
    console.log(`server is running ${process.env.port}`)
})