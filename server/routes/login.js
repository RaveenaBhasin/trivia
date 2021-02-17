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

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    Users.findById(id, function(err, user) {
      done(err, user);
    });
  });

  // Authenticates a login.
    router.post("/login", passport.authenticate("local"), 
        (req, res) => {
            res.json(req.user)
  });

  // Log's out.
  router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

module.exports = router