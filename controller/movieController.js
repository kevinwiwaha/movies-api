const { User } = require('../models')
module.exports = {
    index:(req,res)=>{
        res.sendStatus(403)
    },
    getById:(req,res)=>{
        res.status(200).json({
            status:"sukses"
        })
    },
    create:async(req,res)=>{
        res.status(200).json({
            status:"sukses"
        })
    }
}