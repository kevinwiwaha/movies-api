const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const { userLogin } = require('../middleware/userAuth')
router.post('/login',userLogin,userController.login)

module.exports = router