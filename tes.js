const {User,Movie}=require('./models')
const bcrypt = require('bcrypt')
// User.create({
//     name:'Kevin',
//     password:'123asdqwe'
// }).then(e=>{
//     const id = e.toJSON().id
//     Movie.bulkCreate([
//         {title:'Semarang punya',user_id:id},
//         {title:'Jakarta punya',user_id:id},
//         {title:'Surabaya punya',user_id:id},
//     ]).then(e=>console.log(e[0]))
// })

bcrypt.hash('rahasia',10,function(err,hash){
    console.log(hash)
})