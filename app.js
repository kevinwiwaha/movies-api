require('dotenv').config()
const express = require('express')
const app = express()
const {PORT,PRIVATE_KEY} = process.env
const pino = require('express-pino-logger')()


const movieRouter = require('./routes/movieRouter')
const userRouter = require('./routes/userRouter')

app.use(express.json())
app.use(pino)


app.use('/movies',movieRouter)
app.use('/login',userRouter)


app.listen(PORT,function(){
    console.log(`🚗 App running on http://localhost:${PORT}`)
})

