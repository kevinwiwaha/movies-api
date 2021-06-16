const { User } = require('../models')
const bcrypt = require('bcrypt')
module.exports = {
    register:(req,res)=>{
        const name = req.body.name
        bcrypt.hash(req.body.password,10,async (err,hash)=>{
            if(err) return err
            const user = await User.create({name,password:hash})
            return res.send({
                user,
                status:"User succesfully registerd"
            })
        })
        
    },
    login:(req,res)=>{
        res.send({
            token:req.token,
            data:req.user
        })
    }
}