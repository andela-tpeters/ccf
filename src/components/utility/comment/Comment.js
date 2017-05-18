import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Comment.css';

export default class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <Row>
          <Col md={1}>
            <div className="profile-img">
              <img src={`http://placehold.it/50x50/${this.props.tempBgCol}/FFFFFF?text=${this.props.tempIcon}`} alt="placeholder" />
            </div>
          </Col>

          <Col md={9}>
            <h3 className="user-name">
              { this.props.userName }
            </h3>

            <p className="comment-content">
              Just some comment that is writen about the coupon.
            </p>
          </Col>

          <Col md={2}>
            <span className="datetime-comment-added">
              Jan 14, 2017
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}