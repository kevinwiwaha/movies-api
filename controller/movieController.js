require('dotenv').config()
const { User ,Movie} = require('../models')
const jwt = require('jsonwebtoken')
const axios = require('axios')
const {PRIVATE_KEY} = process.env
module.exports = {
    index:(req,res)=>{
        res.sendStatus(403)
    },
    getById:(req,res)=>{
        res.status(200).json({
            status:"sukses"
        })
    },
    getByTitle:(req,res)=>{
        axios.get(`http://www.omdbapi.com/?s=${req.params.title}&apikey=aae0678a`)
        .then(data => {
            console.log()
            if("Error" in data.data){
                return res.status(200).json({
                    msg:"Image poster not found"
                })
            }
            let result = data.data.Search[0]
            console.log(data)
            return res.send({
                title:result.Title,
                posterUrl:result.Poster
            })
            
        })
        .catch(err => res.send(err));
    },
    getAll:async(req,res)=>{
        const movie = await Movie.findAll({raw:true})
        let imagePoster = []
        movie.map(async(movie) => {
            // let request = await axios.get(`http://www.omdbapi.com/?s=${movie.title}&apikey=aae0678a`)
            imagePoster.push('req.Response')
        })
        console.log(imagePoster)
    },
    create:async(req,res)=>{
        const user_id = req.user.id
        const title = req.body.title
        const movie = await Movie.create({title,user_id})
        return res.send({
            movie,
            status:"Succesfully add movie"
        })
        
    }
}