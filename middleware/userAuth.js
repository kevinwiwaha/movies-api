require('dotenv').config
const {PRIVATE_KEY} = process.env
const jwt = require('jsonwebtoken')
const { User } = require('../models')
const bcrypt = require('bcrypt')

const userLogin = async (req,res,next)=>{
    const name = req.body.name
    const password = req.body.password
    let result = await User.findOne({
        where:{name}
    })
    if(result !== null){
        const token = jwt.sign(result.toJSON(),PRIVATE_KEY)
        const userData = result.toJSON()
        bcrypt.compare(password, userData.password,function(err,status){
            // if(err) console.log(err)
            if(status == true){
                req.token = token
                req.user = userData
                next()
            }else if(status !== true){
                res.sendStatus(401)
            }

            
        })
        
    }else if(result == null){
        res.sendStatus(401)
    }
   
}
const userVerify = (req,res,next) => {
    
    const token = req.headers.authorization
            if(token != null){
                jwt.verify(token.split(" ")[1],PRIVATE_KEY,function(err,user){
                    if(err) return res.status(401).json({err})
                    req.user = user
                    return next()
                })
            }else if(token == null){
                res.send(403)
            }
}

module.exports = {userLogin,userVerify}