const Owners = require('../models/Owners')
const { encrypt, checkPassword } = require('../helper/encryption')
const { getToken } = require('../helper/jwt')
const Owner = require('../models/Owners')
const redis = require('redis')
const redisClient = redis.createClient()
const expired = 3600


module.exports = {
    register : async (req,res)=>{
        const {
            fullname,
            password,
            phone,
            email,
            address,
            petsDetail
        } = req.body
        try{
            const owner = await Owners.create(
                {
                    fullname,
                    password: encrypt(password),
                    phone,
                    email,
                    address,
                    petsDetail,
                }
            )
            const payload = {
                fullname : owner.fullname,
                phone : owner.phone,
                email : owner.email,
                address: owner.address,
                petsDetail : owner.petsDetail
            }
            const token = getToken(payload)
            return res.status(200).json(
                {
                    status : "success",
                    data : owner,
                    token : token
                })
        }catch(e){
            return res.status(400).json(
                {
                    status : "failed",
                    message : "Error has occured",
                    error : e,
                })
        }
    },
    login : async (req,res)=>{
        const { email, password } = req.body
        try{
            const owner = await Owners.findOne({
                where :{
                    email
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
            const token = getToken(payload)
            return res.status(200).json(
                {
                    status : "success",
                    token : token,
                })
        }catch(e){
            return res.status(400).json(
                {
                    status : "failed",
                    message : "Error has occured",
                    error : e
                })
        }  
    },
    addPetDetail : async (req,res)=>{
        const { id } = req.owner
        const { petsDetail } = req.body
        try{
            const owner = await Owners.findOneAndUpdate({
                where : {
                    id : id
                }
            },{
                $push :{
                    petsDetail
                }
            })
            return res.status(200).json(
                {
                    status: "success",
                    message :"Pet is added ",
                })
        }catch(e){
            return res.status(400).json(
                {
                    status : "failed",
                    message : "Error has occured",
                    error : e
                    })
        }
    },
    getAllOwner : async (req,res)=>{
        try{
            let result ;
            redisClient.get(`owner`,async (e,owner)=>{
                if(e) console.error(e)
                if(owner) result= JSON.parse(owner)
            })

            if(!result){
               result =  await Owners.find({isAdmin :false})
               redisClient.setex(`owner`,expired,JSON.stringify(result))
            } 
           
            return res.status(200).json(
                {
                    status : "success",
                    data : result,
                })
        }catch(e){
            return res.status(400).json(
                {
                    status : "failed",
                    message : "Error has occured",
                    error : e
                })
        }
    },
    updatePetDetail : async (req,res)=>{
        const { id } = req.owner
        const { petId } = req.query
        const {
            petName,
            petAge,
            petSpecies,
            petBreed,
            petColour
        } = req.body
     
        try{
            const pet = await Owner.findOne({
                where : {
                    id
                }
            })
            console.log(pet.petsDetail)
            let index ;
            pet.petsDetail.forEach((e,i)=>{
                if(e.id == petId) {
                    index = i
                }
            })
            
            petName ? pet.petsDetail[index].petName = petName : pet.petsDetail[index].petName
            petAge ? pet.petsDetail[index].petAge = petAge : pet.petsDetail[index].petAge
            petSpecies ? pet.petsDetail[index].petSpecies = petSpecies :  pet.petsDetail[index].petSpecies
            petBreed ? pet.petsDetail[index].petBreed = petBreed :  pet.petsDetail[index].petBreed
            petColour ? pet.petsDetail[index].petColour =petColour :  pet.petsDetail[index].petColour

            await pet.save()
            return res.status(200).json(
                {
                    status : "success",
                    pet : pet,
                })
        }catch(e){
            return res.status(400).json(
                {
                    status : "failed",
                    message : "Error has occured ! ",
                    error : e
                })
        }
       
        
    },
    updateOwner : async (req,res)=>{

    }

}