const router = require('express').Router()
const ownerRoute = require('./owner.route')
const invoiceRoute = require('./invoice.route')
const { isLogin } = require('../middleware/auth')

router.get('/',(req,res)=>{
    res.status(200).json({status : "success" , message : "This isLogin home Pages!"})
})

router.use('/owner',ownerRoute)
router.use('/invoices',isLogin,invoiceRoute)



module.exports = router