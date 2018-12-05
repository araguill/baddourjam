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
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      selectedDay: undefined,
      photo: nick,
      weekday: undefined
    };
  }
  handleDayClick(day) {
    this.setState({ selectedDay: day });
  }
  handleClick() {
    this.setState({ photo: baddour });
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.photo} className="App-logo" alt="logo" />
          <p>
            Can Baddour come out and jam?
          </p>

          <div>
            <DayPicker onDayClick={this.handleDayClick}
            selectedDays={this.state.selectedDay}
            />
          </div>

          <AwesomeButton type="primary"
                      onClick={this.handleClick}>

                      Find out

          </AwesomeButton>

        </header>
        </div>
    );
  }
}

export default App;
