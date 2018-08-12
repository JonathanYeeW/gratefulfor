console.log("## feedback.js ##")
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Feedback = mongoose.model('Feedback')

// GET ALL FEEDBACKS
router.get('/', function (request, response) {
    Feedback.find({}, function (err, feedbacks) {
        if (err) {
            response.json({ message: "There was an error getting all posts", error: true })
        } else {
            //Reverse the posts so they're in new -> old order
            feedbacks.reverse()
            response.json({ message: "success", error: false, feedbacks: feedbacks })
        }
    })
})

// CREATE FEEDBACK
router.post('/create', function (request, response) {
    var feedback = new Feedback({ name: request.body.name, post: request.body.post, feedback: request.body.feedback, created_at: Date()})
    feedback.save(function (err) {
        if (err) {
            response.json({ message: "There was an error creating a new post", error: true })
        } else {
            response.json({ message: "success", error: false, newFeedback: feedback })
        }
    })
})

// DELETE ALL FEEDBACKS
router.delete('/deleteAll', function (request, response) {
    Feedback.remove({}, function (err) {
        if (err) {
            response.json({ message: "There was an error deleting all posts", error: true })
        } else {
            response.json({ message: "success", error: false })
        }
    })
})

module.exports = router;