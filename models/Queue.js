const mongoose = require('mongoose')
const Schema = mongoose.Schema

const queueSchema = new Schema ({
    groomer:{
        name : String,
    },
    ins : {
        type : String,
    },
    outs : {
        type : String,
    },
    date : {
        type : Date,
        default : new Date(),
    },
})

const Queue = mongoose.model("Queue",queueSchema)

module.exports = Queue