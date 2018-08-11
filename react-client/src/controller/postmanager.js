
function createPost(data) {
    console.log("## postmanager.js ## createPost")
    console.log(data)
    // Update the promise to handle an unsuccessful request.
    fetch('/post/create', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => console.log(res))
}

function getAllPosts() {
    console.log("getAllPosts")
    fetch('/post/')
    .then(res => res.json())
    .then(res => {
        console.log(res.posts)
        return res.posts
    })
}

function getFlaggedPosts(){
    console.log("getFlaggedPosts")
    fetch('/post/flaggedPosts')
    .then(res => res.json())
    .then(res => {
        console.log(res.posts)
        return res.posts
    })
}

function deleteAllPosts() {
    console.log("delete all posts")
    fetch('/post/deleteAll', {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(res => console.log(res))
}

function deletePost(data) {
    // data should be the post id
    console.log("## postmanager ## deletePost")
    fetch('/post/delete', {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({postid: data})
    })
        .then(res => res.json())
        .then(res => console.log(res))
}

function likePost(data) {
    fetch('/post/like', {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({postid: data._id})
    })
}

function flagPost(data){
    fetch('/post/flag', {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({postid: data._id})
    })
}

function removeFlag(data){
    // data should be the postid
    console.log("remove flag", data)
    fetch('/post/removeflag', {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({postid: data._id})
    })
}

module.exports = {
    createPost,
    getAllPosts,
    getFlaggedPosts,
    deleteAllPosts,
    likePost,
    flagPost,
    removeFlag,
    deletePost
}