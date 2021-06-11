module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define('User',{
        user_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        tableName:'users'
    })
    return User
}