import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import HomePage from './home/HomePage';
import Account from './account/Account';
import DealDetail from './details/DealDetail';

export default (props) => {
  return (
    <BrowserRouter>
      <App {...props}>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/account' component={Account} loggedIn={true} />
        <Route exact path='/details' component={DealDetail} />
      </App>
    </BrowserRouter>
  );
}