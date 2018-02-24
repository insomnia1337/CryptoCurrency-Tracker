import React, { Component } from 'react';
import Header from './components/Header/Header';
import Coin from './components/CoinList/Coin/Coin';
import './styles/bootstrap-grid.css'

class App extends Component {
  render() {
    return (
      <div>
       <Header />
       <Coin />
      </div>
    );
  }
}

export default App;
