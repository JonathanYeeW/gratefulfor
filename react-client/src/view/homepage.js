// MARK: All Componenets are rendered through the App.js
// Look there when starting to learn this application

import React, { Component } from 'react';
import { Post } from "./Components/Post";

// Props:
// - navigate() | the function from App that switches views
// between Homepage and Feedback Page

export class Homepage extends Component {
    constructor(props) {
        super(props);
        console.log("## Homepage ## props:", this.props)
        this.state = {
            posts: [1, 2, 3, 4, 5],
            submission: false,
        }
    }

    // function for submitting a new post
    submitNewPost = (event) => {
        console.log("## Homepage ## submitNewPost()")
        event.preventDefault();
        console.log(event.target.name.value)
        console.log(event.target.post.value)
        event.target.name.value = ""
        event.target.post.value = ""
        this.setState({
            submission: true
        })
    }

    // function for sorting the posts between newest, most
    // popular, and most discussed
    sortPosts = (data) => {
        console.log("## Homepage ## sortPosts()")
        switch (data) {
            case 0:
                console.log("Newest")
                break
            case 1:
                console.log("Most Popular")
                break
            case 2:
                console.log("Most Discussed")
                break
            default:
                console.log("error")
        }
    }

    render() {
        console.log("## Homepage ## render()")

        // Below is code for toggling the view before and after a
        // post is submitted. 
        let formbody;
        if (this.state.submission) {
            formbody =
                <div className="d-flex justify-content-center">
                    <h3 className>Thank you for your submission!</h3>
                    <button className="btn" onClick={() => this.setState({ submission: false })}>Submit Again</button>
                </div>
        } else {
            formbody =
                <form className="mb-5" onSubmit={(event) => this.submitNewPost(event)}>
                    <div className="form-group">
                        <input type="text" class="form-control" placeholder="Your Name" name="name" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" placeholder="I'm grateful for..." rows="3" name="post"></textarea>
                    </div>
                    <div className="row d-flex justify-content-end">
                        <button className="btn">Post</button>
                    </div>
                </form>
        }

        return (
            <div className="container">
                <div className="row ">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <h3 className="text-center mb-5">What Are You Grateful For?</h3>
                        <div className="grateful-homepage-formbody">
                            {formbody}
                        </div>
                        <hr />
                        <div className="row mb-4">
                            <div className="d-flex justify-content-start col-4">
                                <a href="#" onClick={() => this.sortPosts(0)}>Newest</a>
                            </div>
                            <div className="d-flex justify-content-center col-4">
                                <a href="#" onClick={() => this.sortPosts(1)}>Most Popular</a>
                            </div>
                            <div className="d-flex justify-content-end col-4">
                                <a href="#" onClick={() => this.sortPosts(2)}>Most Discussed</a>
                            </div>
                        </div>
                        {
                            this.state.posts.map(item => {
                                return (
                                    <div key={item}>
                                        <Post />
                                    </div>
                                )
                            })
                        }
                        <div className="row">
                            <div className="col-6 d-flex justify-content-start">
                                <a href="#">prev</a>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <a href="#">next</a>
                            </div>
                        </div>
                        <hr />
                        <div className="row d-flex justify-content-center">
                            <a href="#" onClick={() => this.props.navigate()}>Feedback</a>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>//End
        )
    }
}

export default Homepage;