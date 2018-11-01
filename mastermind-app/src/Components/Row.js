import React, { Component } from 'react';
import Peg from './Peg';
import FeedbackSquare from './FeedbackSquare';

class Row extends Component {

  render() {
    const row = 10 - this.props.value + 1;
    const numbers = [1,2,3,4];
    const code = numbers.map((number) =>
      (
          <Peg key={number.toString()}
            turn={this.props.turn}
            row={row}
            slot={number - 1}
            onColorChange={this.props.onCodeChange}/>
      )
    );

    const rowNum = <p className="row-number">{row}</p>
    return (
      <div className="row-container">
        <div id="left">
          {this.props.turn === (10 - this.props.value + 1) && rowNum}
        </div>
        <div id="middle">
          {code}
        </div>
        <div id="right">
          <FeedbackSquare feedback={this.props.feedback}/>
        </div>
      </div>
    );
  }
}

export default Row
