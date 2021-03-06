require('dotenv').config()

const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: 'quiz_database_dev',
    host: DB_HOST,
    dialect: 'postgres'
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: 'quiz_database_test',
    host: DB_HOST,
    dialect: 'postgres'
  },
  production: {
    dialect: 'postgres',
    use_env_variable: 'DATABASE_URL'
  }
}
