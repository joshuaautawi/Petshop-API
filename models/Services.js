const mongoose = require('mongoose')
const Schema = mongoose.Schema

const servicesSchema = new Schema ({
    grooming : {
        type : Array
    },
    catHotel : {
        type : Object
    },
    dogHotel : {
        type : Object
    }
})

const Services = mongoose.model("Services",servicesSchema)

module.exports = Services