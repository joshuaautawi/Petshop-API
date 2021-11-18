const Queue = require("../models/Queue");

module.exports = {
    createQueue : async (value)=>{
        const {ins,outs,groomer} = value
        try{
            const data = await Queue.create({
                groomer,
                ins,
                outs
            })
            return data
        }catch(e){
            throw new Error
        }
    },
}