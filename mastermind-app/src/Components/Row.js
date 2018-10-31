import React, { Component } from 'react';
import Peg from './Peg';
//import '../Styles/Row.css';
import FeedbackSquare from './FeedbackSquare';

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: [0, 0, 0, 0]
    };
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange(colorIndex, slotIndex) {
    // console.log(colorIndex);
    // console.log(slotIndex);
    const code = this.state.code;
    if (code[slotIndex] === 5) {
      code[slotIndex] = 0;
    } else {
      code[slotIndex] += 1;
    }
    this.forceUpdate();
    console.log(this.state.code)
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
            colorIndex={this.state.code[number - 1]}
            onColorChange={this.handleColorChange}/>
      )
    );

    const rowNum = <p className="row-number">{row}</p>
    return (
      <div className="row-container">
        {this.props.turn === (10 - this.props.value + 1) && rowNum}
        {code}
      </div>
    );
  }
}

export default Row
