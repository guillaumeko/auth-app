import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'

export default class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: ''
    };
  }

  render(){
    let currentUser = this.props.currentUser;
    let userDataAvailable = (currentUser !== undefined);
    let loggedIn = (currentUser && userDataAvailable);
    return (
      <div>
        <div className="container">
          <h1 className="text-center">
            { loggedIn ? 'Welcome '+currentUser.username : '' }
            Here the Front page, no need to be logged
          </h1>
        </div>
      </div>
    );
  }
}

MainPage.PropTypes = {
  username: React.PropTypes.string
}

