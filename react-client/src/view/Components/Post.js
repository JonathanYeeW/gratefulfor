// MARK: All Componenets are rendered through the App.js
// Look there when starting to learn this application

import React, { Component } from 'react';

export class Post extends Component {
    render() {
        return (
            <div className="mt-3 mb-3">
                <div className="border rounded grateful-fill-width grateful-post-box">
                    <div className="p-1">
                        <p>post.text</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <p>post.name</p>
                    </div>
                    <div className="col-2">
                        <a href="#">post.likes</a>
                    </div>
                    <div className="col-3">
                        {/* <a href="#">comment #</a> */}
                    </div>
                    <div className="col-5 d-flex justify-content-end">
                        <a href="#" className="text-danger">flag</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;