const { Sequelize } = require('sequelize/types')
const { sequelize } = require('.')

module.exports = (sequelize, Sequelize) => {
  const Scores = sequelize.define('scores', {
    score: {
      type: Sequelize.INTEGER
    },
    userId: {
      type: Sequelize.INTEGER
    }
  })
}
