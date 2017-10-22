import React, { Component } from 'react';
import './App.css';

function FormattedDate(props) {
  return (
    <div className="container">
      <div className="logo">React Cooooooolour</div>
      <div className="bgColor" style={{backgroundColor: `#${props.date}` }}></div>
      <h2 className="date">#{props.date}</h2>
    </div>
  )
}

class Clock extends Component {
  constructor(props) {
    super(props);
    let date = new Date();
    let hour = date.getHours().toString();
    if (hour.length < 2) { hour = '0' + hour; }
    let minute = date.getMinutes().toString();
    if (minute.length < 2) { minute = '0' + minute; }
    let second = date.getSeconds().toString();
    if (second.length < 2) { second = '0' + second; }
    let currentDate = hour + minute + second;
    this.state = {
      date: currentDate,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let date = new Date();
    let hour = date.getHours().toString();
    if (hour.length < 2) { hour = '0' + hour; }
    let minute = date.getMinutes().toString();
    if (minute.length < 2) { minute = '0' + minute; }
    let second = date.getSeconds().toString();
    if (second.length < 2) { second = '0' + second; }
    let currentDate = hour + minute + second;
    this.setState({
      date: currentDate,
    });
  }

  render() {
    return (
      <div>
        <FormattedDate date={this.state.date} />
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Clock />
    )
  }
}

export default App;
