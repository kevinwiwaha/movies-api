module.exports = {
    login:(req,res)=>{
        res.send({
            token:req.token,
            data:req.user
        })
    }
}