import React, { Component } from 'react';
import logo from './logo.svg';
import nick from './nick.png'
import './App.css';
import React from 'react';
import DayPicker from 'react-day-picker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={nick} className="App-logo" alt="logo" />
          <p>
            Can Matt Baddour come out and jam?
          </p>
          <DayPicker />
          <a
            className="App-link"
            href="https://sudoroso.bandcamp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find out
          </a>
        </header>
      </div>
    );
  }
}

export default App;
