'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('Projects', [
       {
       name: 'LNQ',
       description: 'LNQ description here',
     },
     {
      name: 'Lightfield',
      description: 'Lightfield description here'
     }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Projects', null, {});
  }
};