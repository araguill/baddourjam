import React, { Component } from 'react';
import logo from './logo.svg';
import nick from './nick.png'
import './App.css';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={nick} className="App-logo" alt="logo" />
          <p>
            Can Baddour come out and jam?
          </p>
          export default class BasicConcepts extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }
  handleDayClick(day) {
    this.setState({ selectedDay: day });
  }
  render() {
    return (
      <div>
        <DayPicker onDayClick={this.handleDayClick} />
        {this.state.selectedDay ? (
          <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
        ) : (
          <p>Please select a day.</p>
        )}
      </div>
    );
  }
}
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
