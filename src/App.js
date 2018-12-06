import React, { Component } from 'react';
import logo from './logo.svg';
import nick from './nick.png'
import baddour from './baddour.png'
import './App.css';
import DayPicker from 'react-day-picker';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import 'react-day-picker/lib/style.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDay: undefined,
      photo: nick,
      weekday: undefined
    };
    this.handleDayClick = this.handleDayClick.bind(this);
    //this.handlePhotoClick = this.handlePhotoClick.bind(this);
  }
  handleDayClick(day) {
    if (day.getDay() == 6) {
      this.setState({
        selectedDay: day,
        photo: baddour
      });
    }
else {
  this.setState({
    selectedDay: day,
    photo: nick
  })
}

    ;
  }
  //handlePhotoClick(e) {
    //this.setState({ photo: baddour });
//  };



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.photo} className="App-logo" alt="logo" />
          <p>
            Can Baddour come out and jam?
          </p>

          <div>
            <DayPicker
            modifiers={{
            sunday: day => day.getDay() === 7,
            }}
            onDayClick={this.handleDayClick}
            selectedDays={this.state.selectedDay}
            />
          </div>

          <AwesomeButton type="primary"
                      href="https://sudoroso.bandcamp.com"
                      target = "_blank">

                      Find out

          </AwesomeButton>
        </header>
        </div>
    );
  }
}


export default App;
