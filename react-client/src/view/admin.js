// MARK: All Componenets are rendered through the App.js
// Look there when starting to learn this application

import React, { Component } from 'react';
import { FlaggedPost } from './Components/FlaggedPost';
var postManager = require('../controller/postmanager')


// Props:
// - navigate | 

export class Admin extends Component {
    constructor(props) {
        super(props);
        console.log("## Admin ## props:", this.props)
        this.state = {
            flaggedPosts: []
        }
        fetch('/post/flaggedPosts')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    flaggedPosts: res.posts
                })
            })
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

                        {
                            this.state.flaggedPosts.map(item => {
                                return (
                                    <div key={item._id}>
                                        <FlaggedPost
                                            item={item}
                                        />
                                    </div>
                                )
                            })
                        }


                        {/* <FlaggedPost /> */}
                        <hr />
                    </div>
                    <div className="col-3"></div>
                </div>

                <hr />
                <div className="row ">
                    <div className="col-12 d-flex justify-content-center">
                        <a href="#" onClick={() => this.props.navigate()}>Home</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;