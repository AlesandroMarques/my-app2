import React, { Component } from 'react';
//import logo from './logo.svg';
import logo from './cloudOnsync.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Cloud On Sync</h1>
        </header>
        <p className="App-intro">
          Simple React Web App
        </p>
      </div>
    );
  }
}

export default App;
