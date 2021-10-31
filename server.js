const express = require('express')
const app = express()
const router = require('./routers/index')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

//env
dotenv.config()

//connect DB
try{
    mongoose.connect("mongodb://localhost:27017/petshop",()=>{
        console.log("Mongoose connected !")
    })
    
}catch(e){
    console.log(e)
}

//body parser
app.use(express.json())
//router
app.use('/',router)










app.listen(4000,()=>console.log(`Server has been started , and listen to port 4000`))