const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
const app = express()
const port = process.env.PORT

// const db = require('./models')
// db.sequelize.sync()

const corsOptions = {
  origin: 'http://localhost:3000'
}

// app.use(cors(corsOptions))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({ message: 'HELLO WORLD' })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
