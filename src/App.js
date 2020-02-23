import React, { Component } from 'react';
import './App.css';

import Header from './Header'
import Aboutshop from './AboutShop'

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <Aboutshop />
      </div>
    );
  }
}

export default App;
