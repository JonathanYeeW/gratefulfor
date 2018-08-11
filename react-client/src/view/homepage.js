// MARK: All Componenets are rendered through the App.js
// Look there when starting to learn this application

import React, { Component } from 'react';
import { Post } from "./Components/Post";
var postManager = require('../controller/postmanager')

// var enc = require('../controllers/encryption.js')


// Props:
// - navigate() | the function from App that switches views
// between Homepage and Feedback Page

export class Homepage extends Component {
    constructor(props) {
        super(props);
        console.log("## Homepage ## props:", this.props)
        this.state = {
            posts: [],
            submission: false,
            name: "",
            post: "",
        }
        fetch('/post/')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    posts: res.posts
                })
            })
    }

    // functions: handles when users type into the name and posts 
    // input field. allows me to set a character limit
    handlePostNameChange = (event) => {
        if (event.target.value.length > 32) {
            return
        }
        this.setState({
            name: event.target.value
        })
    }

    handlePostPostChange = (event) => {
        if (event.target.value.length > 150) {
            return
        }
        this.setState({
            post: event.target.value
        })
    }

    // function for submitting a new post
    submitNewPost = (event) => {
        console.log("## Homepage ## submitNewPost()")
        event.preventDefault();
        // data is what i'll send to the server to create 
        // the post object
        const data = {
            name: this.state.name,
            post: this.state.post,
        }
        postManager.createPost(data)
        this.setState({
            submission: true,
            name: "",
            post: "",
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

    // function: connected to the prev and next buttons 
    // at the bottom of the page. toggles the pagination
    // of 25 posts forward and back.
    pagination = (data) => {
        console.log("## Homepage ## pagination()")
        switch (data) {
            case 0:
                console.log("previous 25")
                break
            case 1:
                console.log("next 25")
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
                <div className="row ">
                    <div className="col-12">
                        <h3 className="text-center">Thank you for your submission!</h3>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button className="btn" onClick={() => this.setState({ submission: false })}>Submit Again</button>
                    </div>
                </div>
        } else {
            formbody =
                <form className="mb-5" onSubmit={(event) => this.submitNewPost(event)}>
                    <div className="form-group">
                        <input type="text" class="form-control" placeholder="Your Name" value={this.state.name} onChange={this.handlePostNameChange} />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" placeholder="I'm grateful for..." rows="3" value={this.state.post} onChange={this.handlePostPostChange}></textarea>
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
                                <a href="#" onClick={(event) => {
                                    event.preventDefault()
                                    this.sortPosts(0)
                                }}>Newest</a>
                                {/* <button className="btn btn-sm" onClick={() => this.sortPosts(0)}>Newest</button> */}
                            </div>
                            <div className="d-flex justify-content-center col-4">
                                <a href="#" onClick={(event) => {
                                    event.preventDefault()
                                    this.sortPosts(1)
                                }}>Most Popular</a>
                                {/* <button className="btn btn-sm" onClick={() => this.sortPosts(1)}>Most Popular</button> */}
                            </div>
                            <div className="d-flex justify-content-end col-4">
                                <a href="#" onClick={(event) => {
                                    event.preventDefault()
                                    this.sortPosts(2)
                                }}>Most Discussed</a>
                                {/* <button className="btn btn-sm" onClick={() => this.sortPosts(2)}>Most Discussed</button> */}
                            </div>
                        </div>
                        {
                            this.state.posts.map(item => {
                                return (
                                    <div key={item._id}>
                                        <Post 
                                            item = {item}
                                        />
                                    </div>
                                )
                            })
                        }
                        <div className="row">
                            <div className="col-6 d-flex justify-content-start">
                                <a href="#" onClick={(event) => {
                                    event.preventDefault()
                                    this.pagination(0)
                                }}>prev</a>
                                {/* <button className="btn btn-sm">prev</button> */}
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <a href="#" onClick={(event) => {
                                    event.preventDefault()
                                    this.pagination(1)
                                }}>next</a>
                                {/* <button className="btn btn-sm">next</button> */}
                            </div>
                        </div>
                        <hr />
                        <div className="row d-flex justify-content-center">
                            <a href="#" onClick={() => this.props.navigate()}>Feedback</a>
                            {/* <button className="btn btn-sm" onClick={() => this.props.navigate()}>Feedback</button> */}
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>//End
        )
    }
}

export default Homepage;