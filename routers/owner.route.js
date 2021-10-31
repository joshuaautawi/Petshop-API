
const router = require('express').Router()
const {register,login,addPetDetail} = require('../controllers/ownerController')
const { isLogin } = require('../middleware/auth')


router.post('/register',register)
router.post('/login',login)
router.patch('/addpet',isLogin,addPetDetail)


module.exports = router

