import React, { Component } from 'react';
import Row from './Row'
import '../Styles/Board.css'

class Board extends Component {

  render() {
    const status = 'Please fill out the row ' + this.props.turn.toString();
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // changes based on what they try to enter
    const rows = numbers.map((number) =>
      <Row key={number.toString()} value={number} turn={this.props.turn} />
    );
    return (
      <div>
        <h3 className="status">{status}</h3>
        <div className="board">
          {rows}
        </div>
      </div>
    );
  }
}

export default Board;
