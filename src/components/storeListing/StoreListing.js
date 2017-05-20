import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Sidebar from '../common/Sidebar';
import CardList from '../utility/cardList/CardList';
import './StoreListing.css';

export default class StoreListing extends Component {
  render() {
    return (
      <main className="store-listing-page">
        <section className="store-info">
          <Grid>
            <Row>
              <Col md={3}>
                <div className="store-logo">
                  <img src="http://placehold.it/200x200?text=Target" alt="placeholder" />
                </div>
              </Col>

              <Col md={8}>
                <div className="store-details">
                  <p className="breadcrumbs">
                    Home > Search
                  </p>

                  <div className="offer-details">
                    <h1>
                      Target Offers
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
                </div>
              </Col>
            </Row>
          </Grid>
        </section>
      </main>
    );
  }
}