import React, { Component } from 'react';
import Board from './Board'

class Game extends Component {
  render() {
    return (
      <div className="game">
        <h1>Mastermind</h1>
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div className="color-selector">{/* display color selector */}</div>
          <button>Enter Code!</button>
        </div>
      </div>
    );
  }
}

export default Game;
