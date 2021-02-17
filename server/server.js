require('dotenv').config()
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const app = express();

const signupRoute = require('./routes/signup')
const loginRoute = require('./routes/login')

const mongoDb = `mongodb+srv://admin:${process.env.PASS}@trivia.ylxsz.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

app.use(session({ secret: `${process.env.SECRET}`, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static('public'))
app.use(cors())

app.use('/', signupRoute)
app.use('/', loginRoute)

app.listen(5000).on('error', (err) => {
    console.log(err)
});