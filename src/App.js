import React, { Component } from 'react';
import './App.css';

import Header from './Header'
import Aboutshop from './AboutShop'
import Strongpoint from './StrongPoint'
import Benefits from './Benefits'



class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <Aboutshop />
        <Strongpoint />
        <Benefits />
      </div>
    );
  }
}

export default App;
