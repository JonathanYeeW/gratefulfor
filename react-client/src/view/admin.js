// MARK: All Componenets are rendered through the App.js
// Look there when starting to learn this application

import React, { Component } from 'react';
import { FlaggedPost } from './Components/FlaggedPost';

// Props:

export class Admin extends Component {
    constructor(props) {
        super(props);
        console.log("## Admin ## props:", this.props)
    }

    render() {
        console.log("## Admin ## render()")
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <h3 className="text-center">Admin Page</h3>
                        <p>Total Posts</p>
                        <p>Total Flags</p>
                        <p>Total Views</p>
                        <hr />
                        <p>Flagged Posts Here</p>
                        <FlaggedPost />
                        <hr />
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        )
    }
}

export default Admin;