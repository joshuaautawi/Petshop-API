
const router = require('express').Router()
const {register,login,addPetDetail,getAllOwner, updatePetDetail} = require('../controllers/ownerController')
const { isLogin } = require('../middleware/auth')

router.get('/',getAllOwner)
router.post('/register',register)
router.post('/login',login)
router.patch('/addpets',isLogin,addPetDetail)
router.patch('/details',isLogin, updatePetDetail)


module.exports = router

