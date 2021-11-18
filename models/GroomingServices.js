const mongoose = require('mongoose')
const Schema = mongoose.Schema

const servicesSchema = new Schema ({

    pet : {
        type : String,
        enum : ["Dog","Cat","Other"],
        required : true
    },
    title : {   
        type : String,
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
    
})

const GroomingServices = mongoose.model("GroomingServices",servicesSchema)

module.exports = GroomingServices