import React from 'react';
import { Tabs, Tab, Row, Col } from 'react-bootstrap';

export default () => {
  return (
    <section>
      <Row>
        <Col xs={12}>
          <Tabs id="home-tabs" defaultActiveKey={1} className="home-tabs-wrapper">
            <Tab eventKey={1} title="BEST OFFERS">
              <div className="home-tab-content">
                <h5>Todays best offers, coupons and deals</h5>
                <span>Some description about ...</span>
              </div>
            </Tab>
            <Tab eventKey={2} title="COUPONS">
              <div className="home-tab-content">
                <h5>Todays coupons</h5>
                <span>Some description about ...</span>
              </div>
            </Tab>
            <Tab eventKey={3} title="DAILY DEALS">
              <div className="home-tab-content">
                <h5>Todays daily deals</h5>
                <span>Some description about ...</span>
              </div>
            </Tab>
            <Tab eventKey={4} title="FREE SHIPPING">
              <div className="home-tab-content">
                <h5>Todays free Shipping</h5>
                <span>Some description about ...</span>
              </div>
            </Tab>
            <Tab eventKey={5} title="SALES">
              <div className="home-tab-content">
                <h5>Todays sales</h5>
                <span>Some description about ...</span>
              </div>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </section>
  )
}
