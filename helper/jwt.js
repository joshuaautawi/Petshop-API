const { sign, verify } = require('jsonwebtoken')

module.exports = {
    getToken : (payload)=>{
        return sign(payload,process.env.JWT_SK)
    },
    checkToken : (token)=>{
        return verify(token,process.env.JWT_SK)
    }
}