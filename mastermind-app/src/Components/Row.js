import React, { Component } from 'react';
import Peg from './Peg'
import '../Styles/Row.css'

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: [null, null, null, null]
    };
  }

  render() {
    //console.log("Turn = " + turn.toString() + ", Row = " + row.toString())
    const row = 10 - this.props.value + 1;
    const numbers = [1,2,3,4];
    const code = numbers.map((number) =>
      (
          <Peg key={number.toString()} slot={number} turn={this.props.turn} row={row} />
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
