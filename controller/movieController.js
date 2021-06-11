const User = require('../models/User')
module.exports = {
    index:(req,res)=>{
        res.sendStatus(403)
    },
    getById:(req,res)=>{
        res.sendStatus(200)
    },
    create:async(req,res)=>{
        
    }
}