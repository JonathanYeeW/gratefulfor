// MARK: All Componenets are rendered through the App.js
// Look there when starting to learn this application

import React, { Component } from 'react';

// Props:
// - navigate() | the function from App that switches views
// between Homepage and Feedback Page

export class Feedback extends Component {
    constructor(props){
        super(props);
        console.log("## Feedback ## props:", this.props)
    }

    render() {
        console.log("## Feedback ## render()")
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
                        <form>
                            <div className="form-group">
                                <input type="text" class="form-control" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" class="form-control" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Feedback" rows="5"></textarea>
                            </div>
                            <div className="row d-flex justify-content-end">
                                <button className="btn">Submit</button>
                            </div>
                        </form>
                        <hr />
                        <div className="row d-flex justify-content-center">
                            <a href="#" onClick={() => this.props.navigate()}>Home</a>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
        )
    }
}

export default Feedback;