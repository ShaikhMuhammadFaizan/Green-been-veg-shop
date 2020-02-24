import React, { Component } from 'react';
import './App.css';

import Header from './Header'
import Aboutshop from './AboutShop'
import Strongpoint from './StrongPoint'
import Benefits from './Benefits'
import OurProducts from './OurProducts'
import Footer from './Footer'

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <Aboutshop />
        <Strongpoint />
        <Benefits />
        <OurProducts />
        <Footer />
      </div>
    );
  }
}

export default App;
