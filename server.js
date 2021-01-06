const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./models')

const app = express()
const port = process.env.PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (req, res) => {
  res.json({ message: 'HELLO WORLD' })
})

app.use('/scores', require('./routes/scores'))

db.sequelize.sync()

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
