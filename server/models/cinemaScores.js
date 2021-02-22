const mongoose = require('mongoose');
const ObjectID = require('mongoose').ObjectId;
const Schema = mongoose.Schema;

const cinemaScore = mongoose.model(
    "Cinema Scores",
    new Schema({
      username: {type: String, required: true},
      userid: {type: ObjectID, required: true},
      Q1: {type: Boolean, required: true},
      Q2: {type: Boolean, required: true},
      Q3: {type: Boolean, required: true},
      Q4: {type: Boolean, required: true},
      Q5: {type: Boolean, required: true}
    })
  );

module.exports = cinemaScore;