const mongoose = require('mongoose')
const Schema = mongoose.Schema

const invoiceSchema = new Schema ({
    status : {
        type : Boolean,
        default :false 
    },
    details : [
        {
            service : String,
            price : Number,
            groomer : String
        } 
    ],
    totalPayment : {
        type : Number,
        default : 0
    }

})


const Owner = mongoose.model("Owners",ownerSchema)

module.exports = Owner