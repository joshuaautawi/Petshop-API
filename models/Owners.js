const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ownerSchema = new Schema ({
    fullname: {
        type: String,
        required : [true,"fullname IS REQUIRED"]

    },
    password : {
        type : String,
        require : [true ,"PASSWORD IS REQUIRED"]
    },
    phone : {
        type : String,
        unique : true,
        required : [true , "PHONE NUMBER IS REQUIRED"]
    },
    email: {
        type : String,
        required : [true,"EMAIL IS REQUIRED"]
    },
    address : {
        type : String,
        required : [true,"ADDRESS IS REQUIRED"]
    },
    isAdmin : {
        type : Boolean,
        default : false
    },
    petsDetail : [
        {
            petName : String,
            petAge : Number,
            petSpecies : {type : String,enum : ["DOG", "CAT" ,"RABBIT","REPTILE","BIRD"]},
            petBreed : String,
            petColour : String
        }
    ],
    serviceHistory : [
        {
            date : Date,
            services : Array,
            invoiceNumber : mongoose.SchemaTypes.ObjectId,
        }
    ]
})


const Owner = mongoose.model("Owners",ownerSchema)

module.exports = Owner