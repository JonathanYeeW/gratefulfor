
function createFeedback(data) {
    // data should be an object with everything
    // {
    //     name: String,
    //     email: String,
    //     feedback: String,
    // }
    console.log("## feedbackmanager ## createFeedback")
    fetch('/feedback/create', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => console.log(res))

}

function getAllFeedbacks() {
    console.log("## feedbackmanager ## getAllFeedbacks")
    fetch('/feedback/')
        .then(res => res.json())
        .then(res => {
            console.log(res.posts)
            return res.posts
        })
}

function deleteAllFeedbacks() {
    console.log("## feedbackmanager ## deleteAllFeedbacks")
}

module.exports = {
    createFeedback,
    getAllFeedbacks,
    deleteAllFeedbacks,
}