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
        let cookie = req.cookies;
        if (cookie === undefined) {
            let randomNumber=Math.random().toString();
            randomNumber=randomNumber.substring(2,randomNumber.length);
            res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
            console.log('cookie created successfully');
        } else {
            console.log('cookie exists', cookie);
        } 
        const token = jwt.sign(result.toJSON(),PRIVATE_KEY)
        const userData = result.toJSON()
        bcrypt.compare(password, userData.password,function(err,status){
            // if(err) console.log(err)
            if(status == true){
                req.token = token
                req.user = userData
                next()
            }else if(status !== true){
                res.sendStatus(403)
            }

            
        })
        
    }else if(result == null){
        res.sendStatus(403)
    }
   
}
const userVerify = (req,res,next) => {
    let cookie = req.cookies;
        if (cookie === undefined) {
            let randomNumber=Math.random().toString();
            randomNumber=randomNumber.substring(2,randomNumber.length);
            res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
            console.log('cookie created successfully');
        } else {
            console.log('cookie exists', cookie);
        } 
    const token = req.headers.authorization
            if(token != null){
                jwt.verify(token.split(" ")[1],PRIVATE_KEY,function(err,user){
                    if(err) return res.status(403).json({err})
                    req.user = user
                    return next()
                })
            }else if(token == null){
                res.send(403)
            }
}

module.exports = {userLogin,userVerify}