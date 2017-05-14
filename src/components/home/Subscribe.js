import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default (props) => {
  return (
    <Col xs={12}>
      <div className="subscribe-wrapper">
        <div>
          <h4>Get the best deals in your inbox</h4>
          <span>Join the thousands who regularly receive onty the best deals in their inbox</span>
        </div>
        <Row>
          <div className="subscribe-form col-xs-12">
            <input type="email" placeholder="Email" className="col-xs-7" />
            <button className="btn btn-primary col-xs-5">SUBSCRIBE</button>
          </div>
        </Row>
      </div>
    </Col>
  );
}