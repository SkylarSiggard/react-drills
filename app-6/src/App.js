import React, { Component } from "react";
import "./App.css";
import Button from './Button'

export default class App extends Component {
  constructor(){
    super() 
    this.state = {
      list: [],
      textInput: ''
    }
    this.handleAddTask = this.handleAddTask.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

handleInputChange = (value) => {
  this.setState({input: value})
}
handleAddTask() {
  this.setState({
    list: [...this.state.list, this.state.input],
    input: ''
  })
  console.log(this.state)
}
  render() 
  {
    let list = this.state.list.map((element, index) => {
      return <Button key={index} task={element} />;
    });
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input value={this.state.input}
            placeholder="Enter new task"
            onChange={e => this.handleInputChange(e.target.value)}type="text"/>
        <button onClick={this.handleAddTask}>Add</button>
        <br/>
        {list}
      </div>
    );
  }
}


