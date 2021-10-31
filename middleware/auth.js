const Owners =require('../models/Owners')
const { verify } = require('jsonwebtoken')
const { findOne } = require('../models/Owners')

module.exports = {
    isLogin : async (req,res,next) => {
       try{
        const token = req.headers.authorization.split(' ')[1]
        if(!token) return res.status(400).json({status : "failed" , message : "Please login !"})
        const { email } = verify(token,process.env.JWT_SK)
        req.owner = await Owners.findOne({
            where : {
                email : email
            }
        })
        if(req.owner) next()
        else throw new Error

       }catch(e){
           return res.status(400).json({status : "failed",message: "error has occured" , error : e})
       }
    }
}