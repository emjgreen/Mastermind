import React, { Component } from 'react';
import Board from './Board'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 1,
      secretCode: [],
      code: [0, 0, 0, 0],
    };
    this.handleEnterCode = this.handleEnterCode.bind(this);
    this.generateRandomCode = this.generateRandomCode.bind(this);
    this.handleCodeChange = this.handleCodeChange.bind(this);
  }

  generateRandomCode() {
    const code = []
    for(let i=0; i < 4; i++ ){
        code.push(Math.floor(Math.random() * 5 + 1));
      }
    this.setState(prevState => ({
      secretCode: code
    }));
    //console.log(code);
  }

  handleEnterCode() {
    // Logic to check if win
    // Logic to check if loss
    // Logic so someone cannot enter a code with black pegs
    this.setState((prevState) => ({
      turn: prevState.turn + 1,
      code: [0, 0, 0, 0],
    }));
    // logic to give feedback
  }

  handleCodeChange(slotIndex) {
    //console.log("In games' handleColorChange");
    const code = this.state.code;
    if (code[slotIndex] === 5) {
      code[slotIndex] = 0;
    } else {
      code[slotIndex] += 1;
    }
    this.forceUpdate();
    console.log(this.state.code);
  }

  render() {
    const status = 'Please fill out the row ' + this.state.turn.toString();
    return (
      <div className="game">
        <h1>Mastermind</h1>
        <h3 className="status">{status}</h3>
        <div className="game-board">
          <Board turn={this.state.turn} onCodeChange={this.handleCodeChange}/>
        </div>
        <div className="game-info">
          <button onClick={this.handleEnterCode}>Enter Code!</button>
        </div>
      </div>
    );
  }
}

export default Game;
