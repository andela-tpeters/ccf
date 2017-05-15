import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import App from './App';
import HomePage from './home/HomePage';
import Account from './account/Account';

export default (props) => {
  return (
    <HashRouter>
      <App>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/account' component={Account} />
      </App>
    </HashRouter>
  );
}