import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router'

export default class AppContainer extends Component {
  constructor(props){
    super(props);
    this.state = this.getMeteorData();
    this.logout = this.logout.bind(this);
  }

  getMeteorData(){
    return { isAuthenticated: Meteor.userId() !== null };
  }

  logout(e){
    e.preventDefault();
    Meteor.logout();
    browserHistory.push('/');
  }
  
 render(){
    return (
      <div>
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Auth App</a>
            </div>
            {(() => {
              if (this.state.isAuthenticated) {
                return (
                  <div className="navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                      <li>
                        <a href="/" onClick={this.logout}>Logout</a>
                      </li>
                    </ul>
                  </div>
                );
              }
            })()}
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
