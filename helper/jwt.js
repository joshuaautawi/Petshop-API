const { sign, verify } = require('jsonwebtoken')

module.exports = {
    getToken : (payload)=>{
        sign(payload,process.env.JWT_SK)
    },
    checkToken : (token)=>{
        verify(token,process.env.JWT_SK)
    }
}