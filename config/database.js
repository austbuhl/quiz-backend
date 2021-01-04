const Sequelize = require('sequelize')
require('dotenv').config()

const { DB_USERNAME, DB_PASSWORD } = process.env

module.exports = new Sequelize('quiz_database_dev', DB_USERNAME, DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
})
