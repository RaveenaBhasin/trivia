const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator')
const Users = require('../models/users')
const router = express.Router()

// Validates input and creates an account to database if successful.
router.post("/createaccount", [
    check('username', `Username is invalid`).exists().bail().isLength({max: 20}).bail(),
    check('confirmPassword', `Password's don't match`).custom((value, {req}) => value === req.body.password)
], (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json({errors: errors.array()})
    } else {
        bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
            if (err) next(err)
            else {
                const user = new Users({
                    username: req.body.username,
                    password: hashedPassword
                  }).save(err => {
                    if (err) { 
                      return next(err);
                    };
                    res.redirect("/login");
                  });
            }
          });
    }
  });

module.exports = router