
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

function deleteAllPosts() {
    console.log("delete all posts")
    fetch('/post/deleteAll', {
        method: "DELETE"
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

module.exports = {
    createPost,
    getAllPosts,
    deleteAllPosts,
    likePost,
    flagPost,
}