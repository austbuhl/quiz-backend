const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = process.env.port || 5000
const app = express()

const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({ message: 'HELLO WORLD' })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
