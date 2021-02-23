const express = require('express');
const cinemaScore = require('../models/cinemaScores');
const router = express.Router()

// Checks if user score is present, if present, if current score > document score, then update, if not, return. If doc not present, create new doc
router.post('/api/cinemaResults', async (req, res, next) => {
    cinemaScore.findOne({userid: req.user._id}, (err, doc) => {
        if (err) {
            return next(err)
        } if (doc) {
            let currentScore = 0
            let dbScore = 0
            const currentScoreValues = [req.body.Q1, req.body.Q2, req.body.Q3, req.body.Q4, req.body.Q5]
            const dbValues = [doc.Q1, doc.Q2, doc.Q3, doc.Q4, doc.Q5]

            dbValues.forEach(e => {
                if (e === true) {
                    dbScore++
                }
            });

            currentScoreValues.forEach(e => {
                if (e === true) {
                    currentScore++
                }
            })

            if (currentScore > dbScore) {
                doc.Q1 = req.body.Q1,
                doc.Q2 = req.body.Q2,
                doc.Q3 = req.body.Q3,
                doc.Q4 = req.body.Q4,
                doc.Q5 = req.body.Q5,
                doc.save(err => {
                    if (err) {
                        return next(err)
                    }
                    res.redirect("/")
                })
            } else {
                return
            }

        } else {
            const score = new cinemaScore({
                username: req.user.username,
                userid: req.user._id,
                Q1: req.body.Q1,
                Q2: req.body.Q2,
                Q3: req.body.Q3,
                Q4: req.body.Q4,
                Q5: req.body.Q5
            }).save(err => {
                if (err) {
                    return next(err)
                } 
                res.redirect("/");
            })
        }
    })
})

// Returns user scores and then counts the score and returns a new array of scores in JSON
router.get('/api/scores', async (req, res, next) => {
    const cinemaScores = await cinemaScore.find({}, (err, doc) => {
        if (err) {
            return next(err)
        }
        if (doc) {
            const countScore = doc.map(user => {
                let count = 0;

                if (user.Q1 === true) { count++ }
                if (user.Q2 === true) { count++ }
                if (user.Q3 === true) { count++ }
                if (user.Q4 === true) { count++ }
                if (user.Q5 === true) { count++ }

                return {username: user.username, score: count}
            })

            countScore.sort((a, b) => {
                return b.score - a.score
            })

            res.json(countScore)
        }
    })
})

module.exports = router
