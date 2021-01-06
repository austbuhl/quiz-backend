const db = require('../models/index')
const Score = db.scores
const User = db.users

exports.getScores = (req, res) => {
  Score.findAll({ include: [{ all: true, nested: true }] })
    .then((data) => res.send(data))
    .catch((err) => console.log(err))
}

exports.create = (req, res) => {
  Score.create({
    difficulty: 'Easy',
    score: 2,
    userId: 3
  })
}
