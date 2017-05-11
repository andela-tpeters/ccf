import React, { Component } from 'react';
<<<<<<< bc164177efdb96348ac9f912e3099f5721512922
import Header from './common/Header';
import Footer from './common/Footer';
import HomePage from './home/HomePage';
=======
import HomePage from "./home/HomePage";
>>>>>>> Integrate sass, bootstrap and react bootstrap
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
