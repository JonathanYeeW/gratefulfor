// MARK: All Componenets are rendered through the App.js
// Look there when starting to learn this application

import React, { Component } from 'react';
var postManager = require('../../controller/postmanager')

// Props:
// item | FlaggedPost object

export class FlaggedPost extends Component {
    
    keepPost = () => {
        console.log("## FlaggedPost ## keepPost")
        postManager.removeFlag(this.props.item._id)
    }

    deletePost = () => {
        console.log("## FlaggedPost ## deletePost")
        postManager.deletePost(this.props.item._id)
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
                    <div className="col-2">
                        <a href="#" className="text-success" onClick={(event)=> {
                            event.preventDefault()
                            this.keepPost()
                            }}>Keep</a>
                    </div>
                    <div className="col-2">
                        <a href="#" className="text-danger" onClick={(event)=> {
                            event.preventDefault()
                            this.deletePost()
                            }}>Delete</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default FlaggedPost;