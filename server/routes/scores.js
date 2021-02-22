const express = require('express');
const cinemaScore = require('../models/cinemaScores');
const router = express.Router()

router.post('/api/cinemaResults', async (req, res, next) => {

    cinemaScore.findOne({userid: req.user._id}, (err, doc) => {
        if (err) {
            return next(err)
        } if (doc) {
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

module.exports = router