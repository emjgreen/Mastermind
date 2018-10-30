import React, { Component } from 'react';
import Board from './Board'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({turn: this.state.turn + 1})
  }

  render() {
    return (
      <div className="game">
        <h1>Mastermind</h1>
        <div className="game-board">
          <Board turn={this.state.turn}/>
        </div>
        <div className="game-info">
          <button onClick={this.handleClick}>Enter Code!</button>
        </div>
      </div>
    );
  }
}

export default Game;
