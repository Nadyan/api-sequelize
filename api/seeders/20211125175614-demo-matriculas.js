'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Matriculas', [
		{
			status: "confirmado",
			estudante_id: 3,
			turma_id: 5,
			createdAt: new Date(),
			updatedAt: new Date()
		},
		{
			status: "confirmado",
			estudante_id: 4,
			turma_id: 5,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmado",
			estudante_id: 5,
			turma_id: 6,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmado",
			estudante_id: 6,
			turma_id: 7,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "cancelado",
			estudante_id: 7,
			turma_id: 6,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "cancelado",
			estudante_id: 8,
			turma_id: 6,
			createdAt: new Date(),
			updatedAt: new Date()
		}
		], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Matriculas', null, {})
  }
};
