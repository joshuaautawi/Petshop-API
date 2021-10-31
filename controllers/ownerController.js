const Owners = require('../models/Owners')
const { encrypt,checkPassword } = require('../helper/encryption')
const { sign } = require('jsonwebtoken')
const Owner = require('../models/Owners')


module.exports = {
    register : async (req,res)=>{
        const {fullname,password,phone,email,address,petsDetail} = req.body
        try{
            const owner = await Owners.create(
                {
                    fullname: fullname,
                    password: encrypt(password),
                    phone: phone,
                    email: email,
                    address: address,
                    petsDetail: petsDetail
                    
                }
            )
            const payload = {
                fullname : owner.fullname,
                phone : owner.phone,
                email : owner.email,
                address: owner.address,
                petsDetail : owner.petsDetail
            }
            const token = sign(payload,process.env.JWT_SK)
            return res.status(200).json({status : "success" , data : owner, token : token})
        }catch(e){
            return res.status(400).json({status : "failed" , message : "Error has occured" , error : e})
        }
    },
    login : async (req,res)=>{
        const { email,password } = req.body
        try{
            const owner = await Owners.findOne({
                where :{
                    email : email
                }
            })
            if(!checkPassword(password,owner.password)) return res.status(400).json({status :"failed" , message :"Wrong password"})
            const payload = {
                fullname : owner.fullname,
                phone : owner.phone,
                email : owner.email,
                address: owner.address,
                petsDetail : owner.petsDetail
            }
            const token = sign(payload,process.env.JWT_SK)
            return res.status(200).json({status : "success" , token : token})
        }catch(e){
            return res.status(400).json({status : "failed" , message : "Error has occured" , error : e})
        }  
    },
    addPetDetail : async (req,res)=>{
        const {id} = req.owner
        const petDetail = req.body
        try{
            const owner = await Owners.findOneAndUpdate({
                where : {
                id : id
                }
            },{
                $push :{
                    petsDetail : petDetail
                }
            })
            return res.status(200).json({status: "success", message :"Pet is added "})
        }catch(e){
            return res.status(400).json({status : "failed" , message : "Error has occured" , error : e})
        }
      
    }

}