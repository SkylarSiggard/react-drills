import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super() 
    this.state = {
      username: '',
      password: ''
    }
  }
  handleUserNameChange(e) {
    this.setState({
      username: e.target.value
    })
  }
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }
  handleLoginChange(e) {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }
  render() {
    return (
      <div className="App">
        <input onChange={e => this.handleUserNameChange(e)}type="text"/>
        <input onChange={e => this.handlePasswordChange(e)}type="text"/>
        <button onClick={e => this.handleLoginChange(e)}>Submit</button>
      </div>
    );
  }
}

export default App;
