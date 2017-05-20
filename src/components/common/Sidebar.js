import React,{ Component } from 'react';
import './Sidebar.css';

export default class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar">
        <div className="sidebar-item">
          <h3 className="header">
            Show
          </h3>

          <div className="options">
            <ul>
              <li>
                <a href="#">
                  All
                </a>
              </li>

              <li>
                <a href="#">
                  Deals
                </a>
            </li>

              <li>
                <a href="#">
                  Coupons
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebar-item">
          <h3 className="header">
            Categories
          </h3>

          <div className="options">
            <ul>
              <li>
                <a href="#">
                  Beverages (100)
                </a>
              </li>

              <li>
                <a href="#">
                  Fruits (331)
                </a>
              </li>

              <li>
                <a href="#">
                  Baked Good (213)
                </a>
              </li>

              <li>
                <a href="#">
                  Fast Food (21)
                </a>
              </li>

              <li>
                <a href="#">
                  Restaurants (71)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    );
  }
}