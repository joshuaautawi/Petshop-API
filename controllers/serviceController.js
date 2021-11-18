const GroomingService = require('../models/GroomingServices')


module.exports = {
    createGroomingService : async (req,res)=>{
        const {
            pet,
            title,
            duration,
            price,
            detail,
         } = req.body

        try{
            const service = await GroomingService.create({
                pet,
                title,
                duration,
                price,
                detail,
              
            })
            return res.status(200).json(
                {
                    status:"success",
                    data : service
                })
        }catch(e){
            return res.status(400).json(
                {
                    status :"failed",
                    message : "error has occured",
                    error : e
                }) 
        }
    },
    
}