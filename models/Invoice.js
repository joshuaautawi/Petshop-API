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
    },
    owner_id : {
        type: String,
    }

})


const Invoice = mongoose.model("Invoice",invoiceSchema)

module.exports = Invoice