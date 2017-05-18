import React, { Component } from 'react';
import Card from '../card/Card';

export default class CardList extends Component {
  render() {
    return (
      <section className="card-list">
        <Card />
        <Card />
        <Card />
      </section>
    );
  }
}