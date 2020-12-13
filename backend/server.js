require("dotenv").config()
const express = require('express')
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true })

const connection = mongoose.connection

connection.once("open",()=>{
    console.log("MongoDb Database connection established!");
})

app.use("/exercises",require("./routes/exercises"))
app.use("/users",require("./routes/user"))
 
app.listen(port,(req,res)=> console.log(`### App running at port ${port} ###`))