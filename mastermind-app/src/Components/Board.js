import React, { Component } from 'react';
import Row from './Row';

class Board extends Component {

  render() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // changes based on what they try to enter
    const rows = numbers.map((number) =>
      <Row key={number.toString()} value={number} turn={this.props.turn} onCodeChange={this.props.onCodeChange} />
    );
    return (
      <div>
        <div className="board">
          {rows}
        </div>
      </div>
    );
  }
}

export default Board;
