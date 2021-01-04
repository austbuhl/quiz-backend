const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./config/database')

const app = express()
const port = process.env.PORT

db.authenticate()
  .then(() => console.log('Database connected!'))
  .catch((err) => console.log('Error:', err))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({ message: 'HELLO WORLD' })
})

app.use('/scores', require('./routes/scores'))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
