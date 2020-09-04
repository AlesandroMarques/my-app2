import React, { Component } from 'react';
import logo from  './cloudOnsync.png';
import './App.css';
import Navibar from './Navibar/Navibar';
//import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navibar/>
        <header className="App-header">
       
          <h1 className="App-title">Welcome to Cloud On Sync</h1>
        </header>
        <p className="App-intro">
          Simple React Web App
        </p>
        <img src={logo}/>
       
      </div>);
  }
}

export default App;
