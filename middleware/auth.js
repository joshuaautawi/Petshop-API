const Owners =require('../models/Owners')
const { checkToken } = require('../helper/jwt')


module.exports = {
    isLogin : async (req,res,next) => {
       try{
        const token = req.headers.authorization.split(' ')[1]
        if(!token) return res.status(400).json({status : "failed" , message : "Please login !"})
        const { email } = checkToken(token)
        const owner = await Owners.findOne({
            where : {
                email : email
            }
        })
        req.owner = {
            fullname : owner.fullname,
            phone : owner.phone,
            email : owner.email , 
            address : owner.address,
            isAdmin : owner.isAdmin,
            petsDetail : owner.petsDetail
        }
        if(req.owner) next()
        else throw new Error

       }catch(e){
           return res.status(400).json({status : "failed",message: "error has occured" , error : e})
       }
    },
    admin : (req,res,next)=>{
        const {isAdmin} = req.owner
        if(!isAdmin) return res.status(400).json({status : "failed" , message : "this is admin authorized only !"})
        next()
    }
}