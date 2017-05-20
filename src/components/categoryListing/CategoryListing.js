import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Sidebar from '../common/Sidebar';
import CardList from '../utility/cardList/CardList';

export default class CategoryListing extends Component {
  render() {
    return (
      <main className="category-listing-page">
        <section className="info">
          <Grid>
            <Row>
              <Col md={8}>
                <div className="store-details">
                  <p className="breadcrumbs">
                    Home > Categories > Electronics
                  </p>

                  <div className="category-details">
                    <h1>
                      Electronics Offers
                    </h1>

                    <p>
                      Now save big with electronics discount offers. To obtain electronics at reduced prices,
                      buying them using electronics offers is a pretty good idea. This can actually save
                      you big in the long run.
                    </p>
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