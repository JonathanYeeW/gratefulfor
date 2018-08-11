// MARK: All Componenets are rendered through the App.js
// Look there when starting to learn this application

import React, { Component } from 'react';

export class FlaggedPost extends Component {
    render() {
        return (
            <div className="mt-3 mb-3">
                <div className="border rounded grateful-fill-width grateful-post-box">
                    <div className="p-1">
                        <p>flaggedpost.text</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <a href="#" className="text-success">Keep</a>
                    </div>
                    <div className="col-2">
                        <a href="#" className="text-danger">Delete</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default FlaggedPost;