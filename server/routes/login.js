const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/users')
const router = express.Router()

// Verifies user validity from database.
passport.use(
    new LocalStrategy((username, password, done) => {
      Users.findOne({ username: username }, (err, user) => {
        if (err) { 
          return done(err);
        };
        if (!user) {
          return done(null, false, { msg: "Incorrect username" });
        } else {
        bcrypt.compare(password, user.password, (err, res) => {
            if (res) {
              // passwords match! log user in
              return done(null, user)
            } else {
              // passwords do not match!
              return done(null, false, {msg: "Incorrect password"})
            }
          })
        }
      });
    })
  );

// Sets userid to session.
  passport.serializeUser(function(user, done) {
    console.log('running pasport')
    done(null, user.id);
  });

  // Verifies userid set by serializeUser on every render.
  passport.deserializeUser(function(id, done) {
    console.log('running deserialize')
    Users.findById(id, function(err, user) {
      done(err, user);
    });
  });

  // Authenticates a login.
    router.post("/api/login", passport.authenticate("local"), 
        (req, res, next) => {
            res.json('Logged in')
            next()
  });

  // Runs on every react component render, which let's other middleware run and sends back a response if user is logged in or not.
  router.get('/api/runapp', (req, res, next) => {
    if (req.user) {
        res.json(req.user.username)
    } else {
        res.json('invalid')
    }
    next()
})

  // Log's out.
  router.get("/api/logout", (req, res) => {
    req.logout();
    res.json("Logged out");
  });

module.exports = router