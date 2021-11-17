const mongoose = require('mongoose')
const Schema = mongoose.Schema

const servicesSchema = new Schema ({

    serviceName : {
        type : String,
        enum : ["Grooming","Hotel"],
        required : true
    },
    title : {   
        type : String,
        enum : [""],
        required : true
    },
    duration : {
        type : String,
        required : true
    },
    price :{
        type : Number,
        required : true
    },
    detail : {
        type : String,
        required : true
    },
    other : {
        type : String,
        enum : ["MEDIUM", "LARGE" , "VIP"]
    },
    owner_id : {
        type: String 
    }
    
})

const Services = mongoose.model("Services",servicesSchema)

module.exports = Services