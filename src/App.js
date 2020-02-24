import React, { Component } from 'react';
import './App.css';

import Header from './Header'
import Aboutshop from './AboutShop'
import Strongpoint from './StrongPoint'
import Benefits from './Benefits'
import OurProducts from './OurProducts'




class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <Aboutshop />
        <Strongpoint />
        <Benefits />
        <OurProducts />
      </div>
    );
  }
}

export default App;
