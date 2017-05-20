import React, { Component } from 'react';
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';
import CardList from '../utility/cardList/CardList';
import CommentList from '../utility/commentList/CommentList';
import './DealDetail.css';

export default class DealDetail  extends Component {
  render() {
    return (
      <main className="details-page">
        <section className="deal-info">
          <Grid>
            <Row>
              <Col md={2}>
                <img src="http://placehold.it/150x110?text=Walmart" alt="placeholder" className="store" />
              </Col>


              <Col md={8}>
                <p className="breadcrumbs">
                  Home > Categories > Electronics
                </p>

                <div className="deal-name">
                  <h1>
                    Walmart - $20 off every $100 purchase
                    <span className="expires-at">Expires tomorrow</span>
                  </h1>
                </div>

                <div className="stats">
                  <div className="verification-status">
                    <i className="fa fa-check-circle"></i>
                    <span>Verified</span>
                  </div>

                  <div className="comment-count">
                    <i className="fa fa-comment"></i>
                    <span>5 comments</span>
                  </div>
                </div>
              </Col>

              <Col md={2}>
                <button className="btn btn-default btn-lg offer-action-btn-alt">
                  Get Offer
                </button>
              </Col>

            </Row>
          </Grid>
        </section>

        <section className="more-info">
          <Grid>
            <Row>
              <Col md={9} mdOffset={2}>
                <div className="save-share-btns">
                  <button className="btn btn-default tab-btn-save">
                    Save <i className="fa fa-star"></i>
                  </button>

                  <button className="btn btn-default tab-btn-share">
                    Share <i className="fa fa-share-square-o"></i>
                  </button>
                </div>

                <Tabs defaultActiveKey={1} id="info">
                  <Tab eventKey={1} title="description">
                    <h3 className="header">
                      About this offer
                    </h3>

                    <p>
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                      layout. The point of using Lorem Ipsum is that it has a more-or-les normal distribution of letters, as oppposed to using
                      'Content here, content here', making it look like readable English.
                    </p>
                  </Tab>

                  <Tab eventKey={2} title="photos">
                    <h3 className="header">
                      Photos
                    </h3>

                    <div className="img-wrapper">
                      <img src="http://placehold.it/120x120" alt="placeholder"/>
                      <img src="http://placehold.it/120x120" alt="placeholder"/>
                      <img src="http://placehold.it/120x120" alt="placeholder"/>
                      <img src="http://placehold.it/120x120" alt="placeholder"/>
                      <img src="http://placehold.it/120x120" alt="placeholder"/>
                    </div>
                  </Tab>
                  <Tab eventKey={3} title="comments">
                    <h3 className="header">
                      Comments
                    </h3>

                    <CommentList />
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Grid>
        </section>

        <section className="similar-offers">
          <Grid>
            <Row>
              <Col md={8} mdOffset={2}>
                <h2>
                  Similar Offers
                </h2>
                <CardList />
              </Col>
            </Row>
          </Grid>
        </section>
      </main>
    );
  }
}