// MARK: All Componenets are rendered through the App.js
// Look there when starting to learn this application

import React, { Component } from 'react';
var postManager = require('../../controller/postmanager')

// Props
// -item | the Post object

export class Post extends Component {
    
    likePost = () => {
        console.log("## Post ## likePost()")
        postManager.likePost(this.props.item)
    }

    flagPost = () => {
        console.log("## Post ## flagPost()")
        postManager.flagPost(this.props.item)
    }

    commentPost = () => {
        console.log("## Post ## commentPost()")
    }

    render() {
        return (
            <div className="mt-3 mb-3">
                <div className="border rounded grateful-fill-width grateful-post-box">
                    <div className="p-1">
                        <p>{this.props.item.post}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <p>{this.props.item.name}</p>
                    </div>
                    <div className="col-2">
                        {/* <button className="btn btn-sm btn-outline-primary">post.likes</button> */}
                        <a href="#" onClick={(event) => {
                            event.preventDefault()
                            this.likePost()
                        }} >Like {this.props.item.likes}</a>
                    </div>
                    <div className="col-4">
                        {/* <button className="btn btn-sm btn-outline-primary">post.likes</button> */}
                        {/* <a href="#" onClick={(event) => {
                            event.preventDefault()
                            this.commentPost()
                        }} >comments #</a> */}
                    </div>
                    <div className="col-2 d-flex justify-content-end">
                        <a href="#" onClick={(event) => {
                            event.preventDefault()
                            this.flagPost()
                        }} className="text-danger">flag</a>
                        {/* <button className="btn btn-sm btn-outline-danger">post.flags</button> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;