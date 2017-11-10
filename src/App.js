import React, { Component } from 'react';
import logo from './logoalkanza.png';
import BasicChart from './components/BasicChart';
import AlkanzaLine from './components/AlkanzaLine';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Alkanza PlotlyJS Examples <a href="https://github.com/plotly" target="blank">fork plotly</a></h1>
        </header>
        <div>          
          <AlkanzaLine />
        </div>
      </div>
    );
  }
}

export default App;
