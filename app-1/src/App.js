import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      words: ""
    }
  }

  handleChange(value) {
    //console.log(e.target.value)
    this.setState({ 
      words: value
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Owen Wilson</h2>
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {/* <input onChange={function(e){this.handleChange(e)}} type="text" /> */}
        <p>{this.state.words}</p>
        <p>{this.state.words}</p>
        <p>{this.state.words}</p>
        <p>{this.state.words}</p>
        <p>{this.state.words}</p>
        <p>{this.state.words}</p>
        <p>{this.state.words}</p>
        <p>{this.state.words}</p>
      </div>
    )
  }
}


// import React, { Component } from "react";
// import "./App.css";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       words: ""
//     };
//   }

//   handleChange(value) {
//     this.setState({ words: value });
//   }

//   render() {
//     return (
//       <div className="App">
//         <input onChange={e => this.handleChange(e.target.value)} type="text" />
//         <p>A Word: {this.state.words}</p>
//       </div>
//     );
//   }
// }

// export default App;
