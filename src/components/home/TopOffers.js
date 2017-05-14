import React from 'react';

const TopOffers = (props) => {
  return (
    <section className="top-offers">
      <div className="offer">
        <img src="http://placehold.it/585x250?text=Placeholder" alt="placeholder" className="offer-img" />
        <p className="offer-price">
          $379.99
        </p>
        <div className="offer-description">
          <header className="title">
            <h3>Save $20 off Motorola webcam</h3>
          </header>

          <p className="mini-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>

          <button className="offer-action-btn btn btn-default btn-lg">
            Get offer
          </button>
        </div>
      </div>

      <div className="offer">
        <img src="http://placehold.it/292x250?text=Placeholder" alt="placeholder" className="offer-img" />
        <div className="offer-description">
          <header className="title">
            <h3>Samsung Galaxy Watch</h3>
          </header>

          <p className="mini-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>

          <button className="offer-action-btn btn btn-default btn-lg">
            Get offer
          </button>
        </div>
      </div>

      <div className="offer">
        <img src="http://placehold.it/392x250?text=Placeholder" alt="placeholder" className="offer-img" />
        <div className="offer-description">
          <header className="title">
            <h3>30% Amazon fire stick plus shipping</h3>
          </header>

          <p className="mini-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>

          <button className="offer-action-btn btn btn-default btn-lg">
            Get offer
          </button>
        </div>
      </div>
    </section>
  );
}

export default TopOffers;