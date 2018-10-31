import React, { Component } from 'react';

class FeedbackSquare extends Component {
  render(){
    return (
      <div className="feedback-square">
        <button className="top-button" disabled></button>
        <button className="top-button" disabled></button>
        <button className="bottom-button" disabled></button>
        <button className="bottom-button" disabled></button>
      </div>
    );
  }
}

export default FeedbackSquare;
