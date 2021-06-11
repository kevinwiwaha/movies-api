const {User,Movie}= require('./models')

User.findOne({
    where:{id:2},
    include:'user_movie'
}).then(e=>console.log(e.toJSON()))