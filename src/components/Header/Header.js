import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row outer-container">
          <div className="col-xs-12 col-lg-10 offset-lg-1" id="MarketCapTitle">
           Market Cap: $497 070 174 372
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-lg-10 offset-lg-1">
            <h1 id="title">Cryptocurrency Tracker</h1>
            <hr class="divider-under-title"/>
          </div>
        </div>
        </div>
    )
  }
}
export default Header