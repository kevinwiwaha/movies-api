require('dotenv').config
const jwt = require('jsonwebtoken')
module.exports = (req,res,next)=>{
    const token = jwt.sign(req.body,'rahasiaaaaa')
    res.send({
        token
    })
}