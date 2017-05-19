import React, { Component } from 'react';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import './Account.css';

export default class Account extends Component {
  render() {
    return (
      <section className="account-section">
        <Row className="account-wrapper">
          <Col>
            <Col xs={2} className="profile-info-wrapper">
              <div className="profile-image"></div>
              <Col xs={12} className="profile-info">
                <p>Constance Okoghenun<br />Last login 2 days ago<br /><a href="#">Update your Profile</a></p>
              </Col>
            </Col>
            <Col xs={10}>
              <Row>
                <Col xs={12}>
                  <div className="account-section-header">
                    <h2 className="header">Hello Customer!</h2>
                    <span>Lagos, Nigeria. Joined in May 2017</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Tabs id="home-tabs" defaultActiveKey={1} className="home-tabs-wrapper">
                    <Tab eventKey={1} title="REVIEWS">
                      <div className="home-tab-content">
                        <h4>Comments</h4>
                        <span>Some description about ...</span>
                      </div>
                    </Tab>
                    <Tab eventKey={2} title="EMAIL SETTINGS">
                      <div className="home-tab-content">
                        <h4>Email Settings</h4>
                        <span>Some settings ...</span>
                      </div>
                    </Tab>
                    <Tab eventKey={3} title="ACCOUNT SETTINGS">
                      <div className="home-tab-content">
                        <h4>Account Settings</h4>
                        <span>Some Account Settings....</span>
                      </div>
                    </Tab>
                  </Tabs>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </section>
    );
  }
}