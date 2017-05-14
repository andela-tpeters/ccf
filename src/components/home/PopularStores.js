import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const PopularStores = (props) => {
  return (
    <section className="popular-stores">
      <h3>Popular Stores</h3>
      <Grid>
        <Row>
          <Col md={2}>
            <img src="http://placehold.it/120x120?text=Amazon" alt="placeholder" />
          </Col>

          <Col md={2}>
            <img src="http://placehold.it/120x120?text=Walmart" alt="placeholder" />
          </Col>

          <Col md={2}>
            <img src="http://placehold.it/120x120?text=Taco+Bell" alt="placeholder" />
          </Col>

          <Col md={2}>
            <img src="http://placehold.it/120x120?text=Target" alt="placeholder" />
          </Col>

          <Col md={2}>
            <img src="http://placehold.it/120x120?text=Walgreens" alt="placeholder" />
          </Col>

          <Col md={2}>
            <img src="http://placehold.it/120x120?text=Spar" alt="placeholder" />
          </Col>
        </Row>

        <Row>
          <Col md={2}>
            <img src="http://placehold.it/120x120?text=Amazon" alt="placeholder" />
          </Col>

          <Col md={2}>
            <img src="http://placehold.it/120x120?text=Walmart" alt="placeholder" />
          </Col>

          <Col md={2}>
            <img src="http://placehold.it/120x120?text=Taco+Bell" alt="placeholder" />
          </Col>

          <Col md={2}>
            <img src="http://placehold.it/120x120?text=Target" alt="placeholder" />
          </Col>

          <Col md={2}>
            <img src="http://placehold.it/120x120?text=Walgreens" alt="placeholder" />
          </Col>

          <Col md={2}>
            <img src="http://placehold.it/120x120?text=Spar" alt="placeholder" />
          </Col>
        </Row>
      </Grid>
    </section>
  );
}

export default PopularStores;