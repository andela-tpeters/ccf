import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header {...this.props} loggedIn={this.props.location.pathname === "/account" ? true : false} />
        {this.props.children}
        <Footer {...this.props} />
      </div>
    );
  }
}

export default withRouter(App);
