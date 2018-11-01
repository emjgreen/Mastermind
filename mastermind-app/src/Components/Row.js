import React, { Component } from 'react';
import Peg from './Peg';
import FeedbackSquare from './FeedbackSquare';

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: [0, 0, 0, 0]
    };
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange(slotIndex) {
    this.props.onCodeChange(slotIndex);
    // const code = this.state.code;
    // if (code[slotIndex] === 5) {
    //   code[slotIndex] = 0;
    // } else {
    //   code[slotIndex] += 1;
    // }
    // this.forceUpdate();
    // console.log(this.state.code);
  }

  render() {
    const row = 10 - this.props.value + 1;
    const numbers = [1,2,3,4];
    const code = numbers.map((number) =>
      (
          <Peg key={number.toString()}
            turn={this.props.turn}
            row={row}
            slot={number - 1}
            onColorChange={this.handleColorChange}/>
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
          <FeedbackSquare />
        </div>
      </div>
    );
  }
}

export default Row
