import React, { Component } from 'react';
import Peg from './Peg'

class Board extends Component {
  render() {
    const status = 'Please fill out the row'; // changes based on what they try to enter
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board"> {
          [1,2,3,4,5,6,7,8,9,10].map( (row) => {
            return <div key={row} className="board-row"> {
              [1,2,3,4].map( (col) => {
          			return <Peg value={col}></Peg>
          		})
            }
            </div>
      	})
      }
      </div>
      </div>
    );
  }
}

export default Board;
