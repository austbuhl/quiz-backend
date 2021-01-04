const express = require('express')
const router = express.Router()
const db = require('../config/database')
const models = require('../models/index')

// console.log(db.Score.findAll().then(console.log))

router.get('/', (req, res) =>
  models.Score.findAll()
    .then((scores) => {
      console.log(scores)
      res.sendStatus(200)
    })
    .catch((err) => console.log(err))
)

module.exports = router
