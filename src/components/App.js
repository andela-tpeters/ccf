import React, { Component } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import HomePage from './home/HomePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header {...this.props} />
        <HomePage />
        <Footer {...this.props} />
      </div>
    );
  }
}

export default App;
