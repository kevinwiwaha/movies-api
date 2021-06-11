'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Users', [{
        name: 'bangjago',
        password:'$2b$10$HtH4qntDFNzn6LX837wIXerPbwIk6C8flPuFWecp9zbLvpUq6AAIq' //password = rahasia
     }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
