import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './CategoryDropdown.css';

export default ({ show }) => {
  return (
    <div className={`cat-drop-wrapper ${ show ? 'active' : '' }`}>
      <Row>
        <div>
          <Row className='cat-row-wrapper'>
            <Col xs={12}>
              <div className="cat-drop-header">
                <span className="showing-text">Showing: </span> &nbsp; Categories
              </div>
            </Col>
          </Row>
          <hr/>
          <Row className='cat-row-wrapper'>
            <Col xs={12}>
              <div className="cat-listing-wrapper">
                <Col xs={4}>
                  <div className="category">
                    <h5 className="category-title">Electronics</h5>
                    <a href="#">Mobiles &amp; Tablets</a>
                    <a href="#">Laptops &amp; Computers</a>
                    <a href="#">Computer Accessories</a>
                    <a href="#">Home Appliances</a>
                    <a href="#">Televisions</a>
                    <a href="#">Gadgets</a>
                  </div>
                  <div className="category">
                    <h5 className="category-title">Travel</h5>
                    <a href="#">Flight Tickets</a>
                    <a href="#">Car Hire Services</a>
                    <a href="#">Vacation Packages</a>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="category">
                    <h5 className="category-title">Fashion</h5>
                    <a href="#">Men's Fashion</a>
                    <a href="#">Women's Fashion</a>
                    <a href="#">Kid's Fashion</a>
                  </div>
                  <div className="category">
                    <h5 className="category-title">Home &amp; Garden</h5>
                    <a href="#">Beddings &amp; Bath</a>
                    <a href="#">Kitchen &amp; Dinning</a>
                    <a href="#">Furnitures</a>
                    <a href="#">House Supplies</a>
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="category">
                    <h5 className="category-title">Food</h5>
                    <a href="#">Beverages</a>
                    <a href="#">Alcohol &amp; Spirit</a>
                    <a href="#">Restaurants</a>
                    <a href="#">Food Delivery</a>
                    <a href="#">Groceries</a>
                  </div>
                  <div className="category">
                    <h5 className="category-title">Others</h5>
                    <a href="#">Something</a>
                    <a href="#">Happens</a>
                    <a href="#">Here</a>
                  </div>
                </Col>
              </div>
            </Col>
          </Row>
        </div>
      </Row>
    </div>
  )
}