'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Pessoas', [{
        nome: 'Nadyan Pscheidt',
        ativo: true,
        email: 'nadyan@pscheidt.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Pessoas', null, {});
    }
};
