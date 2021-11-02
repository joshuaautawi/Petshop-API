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
        const { id } = req.query
        const {
            serviceName,
            title,
            duration,
            price,
            detail,
            other
        } = req.body
        try{
            const service = await Services.findByIdAndUpdate(id,{
                serviceName,
                title,
                duration,
                price,
                detail,
                other
            },
            {
                returnOriginal : false
            })
            return res.status(200).json(
                {
                    status : "success",
                    message : "Services has been updated !"
                }
            )
            
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
        const { id } = req.query
        try{
            await Services.findByIdAndDelete(id)
            return res.status(200).json(
                {
                    status : "success",
                    message : "delete success !"
                }
            )
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
            const result = await Services.find({
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