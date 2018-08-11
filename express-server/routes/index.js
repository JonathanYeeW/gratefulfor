console.log("index.js")
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/grateful')
mongoose.Promise = global.Promise;

// POST SCHEMA
var PostSchema = new mongoose.Schema({
  name: String,
  post: String,
  created_at: Date,
  flag: Boolean,
  likes: Number,
})
mongoose.model('Post', PostSchema)

// VIEW SCHEMA
var ViewSchema = new mongoose.Schema({
  counter: Number,
})
mongoose.model('View', ViewSchema)

// FEEDBACK SCHEMA
var FeedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  created_at: Date,
})
mongoose.model('Feedback', FeedbackSchema)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
