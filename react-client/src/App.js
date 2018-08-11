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
      navigate: true
    }
  }

  navigate = () => {
    console.log("## App ## navigate()")
    this.setState({
      navigate: !this.state.navigate,
    })
  }

  render() {
    console.log("## App ## render()")
    let body;
    if (this.state.navigate === true) {
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
        {/* <Admin /> */}
      </div>
    )
  }
}

export default App;
