const express = require('express')
const router = express.Router()
const movieController = require('../controller/movieController')
const { userLogin, userVerify } = require('../middleware/userAuth')

router.get('/', movieController.index)
// router.get('/:title', movieController.getByTitle)
router.get('/favourite',userVerify, movieController.getAll)
router.post('/favourite',userVerify, movieController.create)

module.exports = router