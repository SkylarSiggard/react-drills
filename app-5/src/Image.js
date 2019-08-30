import React, { Component } from "react";
import "./App.css";


export default class Image extends Component {
  // constructor(props){
  //   super(props)
  // }
  render() {
    console.log(this.props)
    return (
      <div>
        <img className='img' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt=''/>
        <div>Hello, World!</div>
      </div>
    );
  } 
}

// {this.props.utrl}