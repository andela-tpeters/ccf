import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './Footer.css';

const Footer = (props) => {
  return (
    <footer className="main-footer">
      <section className="email-subscription container">

        <Grid>
          <Row>
            <Col md={5}>
              <h4>
                Get the best deals in your inbox!
              </h4>
              <p>
                Join thousands who receive the best deals in their inbox
              </p>
            </Col>

            <Col md={5}>
              <form className="subscribe-form">
                <input type="email" className="form-control" placeholder="Enter your email address" required />
                <button type="submit" className="btn btn-default">
                  Subscribe
                </button>
              </form>
            </Col>
          </Row>
        </Grid>

      </section>

      <nav className="footer-navigation container">
        <div className="logo">
          <h3>CouponCoolers</h3>
        </div>

        <div className="browse">
          <h5>Browse</h5>
          <ul>
            <li>
              <a href="#">Deals</a>
            </li>
            <li>
              <a href="#">Stores</a>
            </li>
            <li>
              <a href="#">Specials</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
          </ul>
        </div>

        <div className="company">
          <h5>Company</h5>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        <div className="help">
          <h5>Help</h5>
          <ul>
            <li>
              <a href="#">Using a coupon</a>
            </li>
            <li>
              <a href="#">Add my store</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;