const router = require('express').Router()
const ownerRoute = require('./owner.route')


router.get('/',(req,res)=>{
    res.status(200).json({status : "success" , message : "This is home Pages!"})
})

router.use('/owner',ownerRoute)




module.exports = router