const mongoose = require('mongoose')
const Schema = mongoose.Schema

const queueSchema = new Schema ({
    availableGroomer : {
        type : Number
    },
    in : {
        type : Date
    },
    out : {
        type : Date
    }


})

const Queue = mongoose.model("Queue",queueSchema)

module.exports = Queue