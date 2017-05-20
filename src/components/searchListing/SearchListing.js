import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Sidebar from '../common/Sidebar';
import CardList from '../utility/cardList/CardList';

export default class SearchListing extends Component {
  render() {
    return (
      <main className="search-listing-page">
        <section className="search-info">
          <Grid>
            <Row>
              <Col md={8}>
                <div className="store-details">
                  <p className="breadcrumbs">
                    Home > Search
                  </p>

                  <div className="search-details">
                    <h1>
                      Search results for "Food Cloud"
                    </h1>
                  </div>

                </div>
              </Col>
            </Row>
          </Grid>
        </section>

        <section className="listing-and-filter">
          <Grid>
            <Row>
              <Col md={3}>
                <div className="main-filter">
                  <Sidebar />
                </div>
              </Col>

              <Col md={8}>
                <div className="metadata">
                  <p>
                    Showing 1 - 10 of 24,505 results
                  </p>

                  <div className="sort-action">
                    <i className="fa fa-caret-down"></i>
                    <select className="form-control">
                      <option value="">Sort by</option>
                    </select>
                  </div>
                </div>

                <div className="listing">
                  <CardList />
                  <CardList />
                </div>
              </Col>
            </Row>
          </Grid>
        </section>
      </main>
    );
  }
}