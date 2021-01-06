const db = require('../models/index')
const Score = db.scores
const User = db.users

exports.getScores = (req, res) => {
  Score.findAll({ include: [{ all: true, nested: true }] })
    .then((data) => res.send(data))
    .catch((err) => console.log(err))
}

exports.create = (req, res) => {
  const { username, score, difficulty } = req.body
  User.findOrCreate({
    where: { username: username }
  })
    .then((user) => {
      Score.create({
        difficulty,
        score,
        userId: user[0].dataValues.id
      }).then((newScore) => {
        Score.findByPk(newScore.id, {
          include: [{ all: true, nested: true }]
        }).then((data) => res.send(data))
      })
    })
    .catch((err) => console.log(err))
}
