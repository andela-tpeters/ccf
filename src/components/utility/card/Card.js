import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starred: false
    }
  }

  showStar() {
    if (this.state.starred) {
      return <i className="fa fa-star"></i>;
    } else {
      return <i className="fa fa-star-o"></i>;
    }
  }

  updateLike = (e) => {
    this.setState((prevState) => {
      return {
        starred: !(prevState.starred)
      }
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <Row>
            <Col md={2}>
              <img src="http://placehold.it/120x120?text=walmart" alt="placeholder" />
            </Col>

            <Col md={8}>
              <h4 className="title">
                $20 off every $100 purchase
              </h4>

              <p className="description">
                Free ground shipping on ordersover $29 at Jelly Belly, just in time for easter
              </p>
            </Col>

            <Col md={2} className="text-right">
              <div className="like" onClick={ this.updateLike }>
                { this.showStar() }
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={12} className="text-right offer-btn-wrapper">
              <button className="offer-action-btn btn btn-default">
                Get Offer
              </button>
            </Col>
          </Row>
        </div>

        <div className="card-footer">
          <div className="verification-status">
            <i className="fa fa-check-circle"></i>
            <span>Verified</span>
          </div>

          <div className="comment-count">
            <i className="fa fa-comment"></i>
            <span>5 comments</span>
          </div>

          <div className="share">
            <i className="fa fa-share-square-o"></i>
          </div>
        </div>
      </div>
    );
  }
}