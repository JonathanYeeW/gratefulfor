// MARK: All Componenets are rendered through the App.js
// Look there when starting to learn this application

import React, { Component } from 'react';

var feedbackManager = require('../controller/feedbackmanager')
// var postManager = require('../../controller/postmanager')


// Props:
// - navigate() | the function from App that switches views
// between Homepage and Feedback Page

export class Feedback extends Component {
    constructor(props) {
        super(props);
        console.log("## Feedback ## props:", this.props)
        this.state = {
            submission: false,
            name: "",
            email: "",
            feedback: "",
        }
    }

    handleFeedbackNameChange = (event) => {
        if (event.target.value.length > 32) {
            return
        }
        this.setState({
            name: event.target.value
        })
    }

    handleFeedbackEmailChange = (event) => {
        if (event.target.value.length > 32) {
            return
        }
        this.setState({
            email: event.target.value
        })
    }

    handleFeedbackFeedbackChange = (event) => {
        if (event.target.value.length > 400) {
            return
        }
        this.setState({
            feedback: event.target.value
        })
    }

    submitFeedback = () => {
        console.log("## Feedback ## submitFeedback()")
        const data = {
            name: this.state.name,
            email: this.state.email,
            feedback: this.state.feedback,
        }
        feedbackManager.createFeedback(data)
        this.setState({
            submission: true,
            name: "",
            email: "",
            feedback: "",
        })
    }

    render() {
        console.log("## Feedback ## render()")
        let body;

        // Below is for toggling the view before and 
        // after feedback is submitted
        if (this.state.submission) {
            body =
                <div>
                    <h3 className="text-center">Thank you for your feedback!</h3>
                </div>
        } else {
            body =
                <form onSubmit={(event) => {
                    event.preventDefault()
                    this.submitFeedback()
                }}>
                    <div className="form-group">
                        <input type="text" class="form-control" placeholder="Your Name" value={this.state.name} onChange={this.handleFeedbackNameChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" class="form-control" placeholder="Your Email" value={this.state.email} onChange={this.handleFeedbackEmailChange} />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Feedback" rows="5" value={this.state.feedback} onChange={this.handleFeedbackFeedbackChange}></textarea>
                    </div>
                    <div className="row d-flex justify-content-end">
                        <button className="btn">Submit</button>
                    </div>
                </form>
        }


        return (
            <div className="container">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <h3 className="text-center">Feedback</h3>
                        <hr />
                        <p>Hey! This is Jonathan. Thanks for coming to my website.
                            If you have any feedback please feel free to drop me a note.
                            You don't need to leave an email or your name if you don't want to.
                        </p>
                        <hr />
                        <div className="grateful-homepage-formbody">
                            {body}
                        </div>
                        <hr />
                        <div className="row ">
                            <div className="col-6 d-flex justify-content-end">
                                <a href="#" onClick={() => this.props.navigate()}>Home</a>
                            </div>
                            <div className="col-6 d-flex justify-content-start">
                                <a href="#" onClick={(event) => {
                                    event.preventDefault()
                                    this.props.navigate("admin")
                                }}>Admin</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        )
    }
}

export default Feedback;