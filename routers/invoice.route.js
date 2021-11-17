const router = require('express').Router()
const {createInvoce }= require('../controllers/invoiceController')

router.post('/',createInvoce)

module.exports = router
