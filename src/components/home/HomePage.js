import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import TopOffers from './TopOffers';
import PopularStores from './PopularStores';
import CardList from '../utility/CardList';
import TabsComponent from './Tabs';
import Subscribe from './Subscribe';
import Banner from './Banner';
import './HomePage.css';

export default class HomePage extends Component {
  render() {
    return (
      <main className="container site-body">
      <section className="container">
        <header className="text-center">
          <h1>
            Great Deals. Great Savings. Always!
          </h1>

          <p>
            Only the best deals for you.
          </p>
        </header>

        <TopOffers />

        <section className="site-ad">
          <img src="http://placehold.it/1170x120?text=Banner+Image" alt="placeholder" />
        </section>

        <PopularStores />
        <TabsComponent />
        <Row>
          <Col md={8}>
            <CardList />
          </Col>

          <Col md={4}>
            <Row>
              <Subscribe />
            </Row>
            <Row>
              <Banner />
            </Row>
          </Col>
        </Row>

      </section>
      </main>
    );
  }
}