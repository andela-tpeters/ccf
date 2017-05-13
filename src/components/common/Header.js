import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Login from '../login/Login';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    }

    this.showModal = this.showModal.bind(this);
    this.close = this.close.bind(this);
  }

  showModal() {
    this.setState({show: true})
  };

  close() {
    this.setState({show: false});
  }


  render() {
    return (
      <header className="main-header">
        <Login showModal={this.state.show} close={this.close} />
        <nav className="navigation">
          <div className="top-nav">
            <Grid>
              <Row>
                <Col md={6} mdOffset={2} className="search-container">
                  <input type="search" placeholder="Search for stores, brand and more..." className="form-control" />
                  <i className="fa fa-search"></i>
                </Col>

                <Col md={3} className="text-right authentication-actions">
                  <a href="#" className="login-btn" onClick={this.showModal}>
                    Login
                  </a>

                  <a href="#" className="signup-btn btn btn-rounded btn-default">
                    Signup
                  </a>
                </Col>
              </Row>
            </Grid>
          </div>

          <div className="bottom-nav">
            <Grid>
              <Row>
                <Col md={6} mdOffset={2} className="navigation-links">
                  <a href="#" className="active">Home</a>
                  <a href="#">Categories</a>
                  <a href="#">Deals</a>
                  <a href="#">Stores</a>
                  <a href="#">Specials</a>
                </Col>
              </Row>
            </Grid>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;