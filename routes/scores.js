const express = require('express')
const router = express.Router()

const scoresController = require('../controllers/score')

router.get('/', scoresController.getScores)

router.post('/', scoresController.create)

module.exports = router
