import React, { Component } from 'react';
import Board from './Board'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 1
    };
    this.handleClick = this.handleClick.bind(this);
    this.generateRandomCode = this.generateRandomCode.bind(this);
  }

  generateRandomCode() {
    console.log("randomCode")
  }

  handleClick() {
    this.setState((prevState) => ({
      turn: prevState.turn + 1
    }));
  }

  render() {
    const status = 'Please fill out the row ' + this.state.turn.toString();
    return (
      <div className="game">
        <h1>Mastermind</h1>
        <h3 className="status">{status}</h3>
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
