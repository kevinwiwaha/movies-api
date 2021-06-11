'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('users', 
    { 
      id: {
        type:Sequelize.BIGINT,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false
      },
      password:{
        type:Sequelize.STRING,
        allowNull:false
      }
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('users');
     
  }
};
