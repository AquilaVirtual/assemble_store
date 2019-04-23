import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import '../App.css';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Navbar from '../containers/Navbar';
import Order from '../containers/Order';
import SearchResults from '../containers/SearchResults';
import OrderComplete from '../containers/OrderComplete';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/order" component={Order} />
        <Route path="/complete" component={OrderComplete} />
        <Route path="/results" component={SearchResults} />
      </div>
    );
  }
}

export default App;
