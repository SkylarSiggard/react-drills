import React, { Component } from "react";
import "./App.css";


export default class App extends Component {
  constructor() {
    super()
    this.state = {
        food: ['beef', 'chicken', 'more meat', 'fish', 'road kill']
    }
}
  render() {

    let list = this.state.food.map(element => {
      return <p>{element}</p>
    })

    return (
      <div className="App">
        <h1>List of Foods:</h1>
        <p>
          {list}
        </p>
        {/* <h3>{this.state.food[0]}</h3>
        <h3>{this.state.food[1]}</h3>
        <h3>{this.state.food[2]}</h3>
        <h3>{this.state.food[3]}</h3>
        <h3>{this.state.food[4]}</h3> */}
      </div>
    )
  }
}







// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
//     };
//   }

//   render() {
//     let foodsToDisplay = this.state.foods.map((element, index) => {
//       return <h2 key={index}>{element}</h2>;
//     });

//     return <div className="App">{foodsToDisplay}</div>;
//   }
// }

// export default App;