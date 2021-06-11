'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('movies', { 
       id: {
         type:Sequelize.BIGINT,
         primaryKey:true,
         autoIncrement:true,
         allowNull:false
       },
       title:{
         type:Sequelize.STRING,
         allowNull:false,
        },
        userId:{
          type:Sequelize.BIGINT,
          references: {
            model: "users",
            key: "id"
          },
          onUpdate:'CASCADE',
          onDelete:'CASCADE',
          allowNull: false
        }
        
      });
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('movies');
     
  }
};
