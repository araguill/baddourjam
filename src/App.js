import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Can Matt Baddour come out and jam?
          </p>
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
