// MARK: All Componenets are rendered through the App.js
// Look there when starting to learn this application

import React, { Component } from 'react';

// Props
// - item | Feedback Object

export class FeedbackPost extends Component {
    
    render() {
        return (
            <div className="mt-3 mb-3">
            <div className="border rounded grateful-fill-width grateful-post-box">
                    <div className="p-1">
                        <p>{this.props.item.feedback}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeedbackPost;