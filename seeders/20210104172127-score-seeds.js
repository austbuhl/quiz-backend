'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Scores', [
      {
        difficulty: 'Easy',
        score: 7,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        difficulty: 'Hard',
        score: 3,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        difficulty: 'Medium',
        score: 8,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        difficulty: 'Easy',
        score: 10,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
