import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import AutoSuggest from "react-autosuggest";
import Login from '../login/Login';
import CategoryDropdown from '../utility/categoryDropdown/CategoryDropdown';
import './Header.css';
import './Autosuggest.css';

const DB = [
  {
    title: 'Categories',
    suggestions: [
      { name: 'Home & Furniture (392)' },
      { name: 'Clothing & Fabrics (133)' },
      { name: "Female Fashion (10)" }
    ]
  },
  {
    title: 'Stores',
    suggestions: [
      { name: 'FILA', image: "http://placehold.it/20x20", offers: 72 },
      { name: 'Fadango', image: "http://placehold.it/20x20", offers: "9,183"},
      { name: 'Flipkart', image: "http://placehold.it/20x20", offers: 122}
    ]
  }
];

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  return DB.map((record) => {
    return {
      title: record.title,
      suggestions: inputLength === 0 ? [] : record.suggestions.filter(lang =>
        (new RegExp(inputValue)).test(lang.name.toLowerCase())
      )
    }
  }).filter((section) => section.suggestions.length > 0);
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => {
  return (<div className="suggestion-item">
    {suggestion.image ? <div className="store-suggestion-image" style={{
      "background-image": `url(${suggestion.image})`
    }}></div> : "" }
    <div className={suggestion.image ? "store-suggestion-info" : ''}>
      <span className={suggestion.image ? 'offer-store' : '' }>{suggestion.name}</span>
      {suggestion.offers ? (<span className="offers-text"><br />{suggestion.offers} offers</span>) : ""}
    </div>
  </div>);
};


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      showCategories: false,
      loggedIn: this.props.loggedIn || false,
      value: '',
      suggestions: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
  }

  showModal = () => {
    this.setState({show: true});
  }

  close = () => {
    this.setState({show: false});
  }

  showDropdown = () => {
    this.setState({ showCategories: !this.state.showCategories });
  }

  toggleCurveClass = () => {
    if (location.hash === '#/') return 'yellow-curve';
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { loggedIn , value, suggestions } = this.state;
    console.log(suggestions);
    return (
      <header className={"main-header " + this.toggleCurveClass()}>
        <Login showModal={this.state.show} close={this.close} />
        <nav className="navigation">
          <div className="top-nav">
            <Grid>
              <Row>
                <Col md={6} mdOffset={2} className="search-container">
                  <AutoSuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    multiSection={true}
                    getSectionSuggestions={(section) => section.suggestions}
                    renderSectionTitle={(section) => (<h6 className="suggestion-header">{section.title}</h6>)}
                    inputProps={{value, onChange: this.onChange, type: "search", placeholder: "Search for stores, brand and more...", className:"form-control"}}
                  />
                  <i className="fa fa-search"></i>
                </Col>
                { loggedIn ?
                <Col md={3} className="text-right authentication-actions loggedIn">
                  <a href="#" className="login-btn">
                    <div className="avatar"></div>
                  </a>
                  <a href="#" className="login-btn greeting">
                    Hello Constance <i className="fa fa-caret-down"></i>
                  </a>
                </Col>
                :
                <Col md={3} className="text-right authentication-actions">
                  <a href="#" className="login-btn" onClick={this.showModal}>
                    Login
                  </a>

                  <a href="#" className="signup-btn btn btn-rounded btn-default">
                    Signup
                  </a>
                </Col>}
              </Row>
            </Grid>
          </div>

          <div className="bottom-nav">
            <CategoryDropdown show={this.state.showCategories} />
            <Grid>
              <Row>
                <Col md={6} mdOffset={2} className="navigation-links">
                  <NavLink to="/" activeClassName="active">Home</NavLink>
                  <a href="#" onClick={this.showDropdown}>Categories</a>
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

export default withRouter(Header);