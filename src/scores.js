const express = require('express');
const router = express.Router();
const scoreModel = require('./scoreModel')

// newScore
router.post('/scores', (req, res) => {
    const newScore = scoreModel(req.body);
    console.log(req.body);
    newScore.save();
});

//getallScores
router.get('/scores', (req, res) => {
    scoreModel.find().then((data) => res.json(data))
})

module.exports = router;