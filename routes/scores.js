const express = require('express')
const router = express.Router()

const scoresController = require('../controllers/score')

router.get('/', scoresController.getScores)

// router.get('/', scoresController.create)

module.exports = router
