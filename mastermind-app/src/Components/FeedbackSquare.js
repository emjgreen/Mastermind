import React, { Component } from 'react';

class FeedbackSquare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  render(){
    const colors=["black", "red", "white"];
    return (
      <div className="feedback-square">
        <button style={{backgroundColor: colors[this.state.counter]}} disabled>o</button>
        <button style={{backgroundColor: colors[this.state.counter]}}  disabled>o</button>
        <button style={{backgroundColor: colors[this.state.counter]}}  disabled>o</button>
        <button style={{backgroundColor: colors[this.state.counter]}}  disabled>o</button>
      </div>
    );
  }
}

export default FeedbackSquare;
