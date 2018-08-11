//PORT=3001 nodemon bin/www

import React, { Component } from 'react';
import { Homepage } from './view/homepage';
import { Feedback } from './view/feedback';
import { Admin } from './view/admin';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("## App ##")
    this.state = {
      //true = homepage, false = feedbackpage
      navigate: true,
      admin: false,
    }
  }

  navigate = (data) => {
    console.log("## App ## navigate()")
    if (data === undefined) {
      this.setState({
        navigate: !this.state.navigate,
        admin: false
      })
    } else {
      this.setState({
        admin: true
      })
    }

  }

  render() {
    console.log("## App ## render()")
    let body;
    if (this.state.admin === true) {
      body =
        <Admin
          navigate={this.navigate}
        />
    } else if (this.state.navigate === true) {
      body =
        <Homepage
          navigate={this.navigate}
        />
    } else {
      body =
        <Feedback
          navigate={this.navigate}
        />
    }

    return (
      <div id="app-wrapper" className="mt-5 mb-5">
        {body}
      </div>
    )
  }
}

export default App;
