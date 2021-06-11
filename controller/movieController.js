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
        for(i=0;i<movie.length;i++){
            let data = await axios.get(`http://www.omdbapi.com/?s=${movie[i].title}&apikey=aae0678a`)
            if("Error" in data.data){
                const response = {
                    title:movie[i].title,
                    poster:data.data.Error
                }
                imagePoster.push(response)
                
                // break
            }else if(data.data.Search[0] != null){
                const response = {
                    title:data.data.Search[0].Title,
                    poster:data.data.Search[0].Poster
                }
                imagePoster.push(response)
                
            }
            // imagePoster.push(data.data.Search[0].title)
            // break

        }
        console.log(imagePoster)
        res.status(200).json({
            result:imagePoster
        })
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