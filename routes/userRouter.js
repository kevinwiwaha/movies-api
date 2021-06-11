const express = require('express')
const router = express.Router()
const movieController = require('../controller/movieController')
const userAuth = require('../middleware/userAuth')
router.get('/',userAuth,movieController.index)

module.exports = router