console.log("## posts.js ##")
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post')

// var PostSchema = new mongoose.Schema({
//     name: String,
//     post: String,
//     created_at: Date,
//     flag: Boolean,
//     likes: Number,
// })

// GET ALL POSTS
router.get('/', function (request, response) {
    Post.find({}, function (err, posts) {
        if (err) {
            response.json({ message: "There was an error getting all posts", error: true })
        } else {
            //Reverse the posts so they're in new -> old order
            posts.reverse()
            response.json({ message: "success", error: false, posts: posts })
        }
    })
})

// GET FLAGGED POSTS
router.get('/flaggedPosts', function (request, response) {
    Post.find({flag: true}, function (err, posts) {
        if (err) {
            response.json({ message: "There was an error getting all posts", error: true })
        } else {
            //Reverse the posts so they're in new -> old order
            posts.reverse()
            response.json({ message: "success", error: false, posts: posts })
        }
    })
})

// CREATE POST
router.post('/create', function (request, response) {
    var post = new Post({ name: request.body.name, post: request.body.post, created_at: Date(), flag: false, likes: 0 })
    post.save(function (err) {
        if (err) {
            response.json({ message: "There was an error creating a new post", error: true })
        } else {
            response.json({ message: "success", error: false, newPost: post })
        }
    })
})

// LIKE POST
router.put('/like', function (request, response) {
    console.log(request.body)
    Post.find({ _id: request.body.postid }, function (err, post) {
        if (err) {
            response.json({ message: "error", error: true })
        } else {
            Post.update({ _id: post[0]._id }, { likes: post[0].likes + 1 }, function (err) {
                if (err) {
                    response.json({ message: "error", error: true })
                } else {
                    response.json({ message: "success", error: false })
                }
            })
        }
    })
})

// FLAG POST
router.put('/flag', function (request, response) {
    console.log(request.body)
    Post.find({ _id: request.body.postid }, function (err, post) {
        if (err) {
            response.json({ message: "error", error: true })
        } else {
            Post.update({ _id: post[0]._id }, { flag: true }, function (err) {
                if (err) {
                    response.json({ message: "error", error: true })
                } else {
                    response.json({ message: "success", error: false })
                }
            })
        }
    })
})

// REMOVE FLAG POST
router.put('/removeflag', function (request, response) {
    console.log(request.body)
    Post.find({ _id: request.body.postid }, function (err, post) {
        if (err) {
            response.json({ message: "error", error: true })
        } else {
            Post.update({ _id: post[0]._id }, { flag: false }, function (err) {
                if (err) {
                    response.json({ message: "error", error: true })
                } else {
                    response.json({ message: "success", error: false })
                }
            })
        }
    })
})

// DELETE SINGLE POST
router.delete('/delete', function (request, response) {
    Post.remove({_id: request.body.postid}, function (err) {
        if (err) {
            response.json({ message: "There was an error deleting all posts", error: true })
        } else {
            response.json({ message: "success", error: false })
        }
    })
})

// DELETE ALL POSTS
router.delete('/deleteAll', function (request, response) {
    Post.remove({}, function (err) {
        if (err) {
            response.json({ message: "There was an error deleting all posts", error: true })
        } else {
            response.json({ message: "success", error: false })
        }
    })
})

module.exports = router;