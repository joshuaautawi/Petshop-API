const Services = require('../models/Services')


module.exports = {
    createService : async (req,res)=>{
        const {
            serviceName,
            title,
            duration,
            price,
            detail,
            other
         } = req.body
         const regex = /hotel/gi 
        try{
            if(regex.test(serviceName) && !other){
                return res.status(400).json(
                    {
                        status:"failed",
                        message : "other is required !"
                    })
            }
            const service = await Services.create({
                serviceName,
                title,
                duration,
                price,
                detail,
                other
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
    updateService : async (req,res)=>{
        try{
            
        }catch(e){
            return res.status(400).json(
                {
                    status :"failed",
                    message : "error has occured",
                    error : e
                }) 
        }
    },
    deleteService : async (req,res)=>{
        try{
            
        }catch(e){
            return res.status(400).json(
                {
                    status :"failed",
                    message : "error has occured",
                    error : e
                }) 
        }
    },
    showAllService : async (req,res)=>{
        const { service } = req.query
        try{
            const service = await Services.find({
                where : {
                    serviceName = service
                }
            })
            return res.status(200).json(
                {
                    status : "succes",
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
        
        
    }
}