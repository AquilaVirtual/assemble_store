import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import '../App.css';
import Home from '../containers/Home';
import Navbar from '../containers/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
      
      </div>
    );
  }
}

export default App;
