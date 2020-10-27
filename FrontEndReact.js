/*We provided some simple React template code. 
Your goal is to modify the component so that the counter correctly displays and it increments by one whenever the button is pressed. 
You are free to add classes and styles, but make sure you leave the element ID's as they are.
Submit your code once it is complete and our system will validate your output.*/

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0,
    };

  }

  incrementar() {
    this.setState({
      contador: this.state.contador + 1,
    });

  }
  render() {
    return (
      <div id="mainArea">
        <p>button count: <span>{this.state.contador}</span></p>
        <button id="mainButton" onClick={this.incrementar.bind(this)}>Increase</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);