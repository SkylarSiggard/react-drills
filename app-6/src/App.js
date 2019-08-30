import React, { Component } from "react";
import "./App.css";
import Button from './Button'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <Button/>
      </div>
    );
  }
}


