import React, { Component } from 'react';
import logo from './logo.svg';
import nick from './nick.png'
import './App.css';
import DayPicker from 'react-day-picker';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import 'react-day-picker/lib/style.css';


class App extends Component {
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
      <div className="App">
        <header className="App-header">
          <img src={nick} className="App-logo" alt="logo" />
          <p>
            Can Baddour come out and jam?
          </p>

          <div>
            <DayPicker onDayClick={this.handleDayClick}
            selectedDays={this.state.selectedDay}
            />
          </div>

          <AwesomeButton type="primary"
                      href="https://sudoroso.bandcamp.com"
                      target="_blank"
                      rel="noopener noreferrer">

              Find out

          </AwesomeButton>

        </header>

    );
  }
}

export default App;
