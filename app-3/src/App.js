import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      list: ['pizza', 'popcorn', 'steak', 'burrios', 'tri tip', 'fruit', 'chicken', 'candy', 'turkey'],
      filter: ''
    }
  }
  handleChange(e) {
    this.setState({
      filter: e.target.value
    })
  }

  render() {
    
    let list = this.state.list.filter(element => {
      if (element.includes(this.state.filter)){
        return true 
      }
    }).map((element, index) => {
      return <li key={index}>{element}</li>
    })


    return (
      <div className="App">
        <input onChange={e => this.handleChange(e)} type='text'/>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

// push into array 