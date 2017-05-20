import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import App from './App';
import HomePage from './home/HomePage';
import Account from './account/Account';
import DealDetail from './details/DealDetail';
import StoreListing from './storeListing/StoreListing';
import SearchListing from './searchListing/SearchListing';
import CategoryListing from './categoryListing/CategoryListing';

export default (props) => {
  return (
    <HashRouter>
      <App>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/account' component={Account} loggedIn={true} />
        <Route exact path='/details' component={DealDetail} />
        <Route exact path='/store-listing' component={StoreListing} />
        <Route exact path='/search-listing' component={SearchListing} />
        <Route exact path='/category-listing' component={CategoryListing} />
      </App>
    </HashRouter>
  );
}