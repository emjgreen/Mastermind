import React, { Component } from 'react';
import Board from './Board';

function ErrorMessage(props) {
  return (
    <div>
      {props.warn &&
        <h4>
          Please submit a valid code.
        </h4>
      }
    </div>
  );
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 1,
      secretCode: [],
      code: [0, 0, 0, 0],
      feedback: [0, 0, 0, 0], //or numRed: 0 and numWhite: 0
      showError: false,
    };
    this.handleEnterCode = this.handleEnterCode.bind(this);
    this.generateRandomCode = this.generateRandomCode.bind(this);
    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.gradeCode = this.gradeCode.bind(this);
  }

  generateRandomCode() {
    const code = [];
    for (let i=0; i < 4; i++ ) {
        code.push(Math.floor(Math.random() * 5 + 1));
      }
    this.setState(prevState => ({
      secretCode: code
    }));
  }

  gradeCode() {
    console.log("in gradeCode");
  }

  handleEnterCode() {
    // Logic so someone cannot enter a code with black pegs

    const code = this.state.code;
    for (var i in code) {
      if (code[i] === 0) {
        console.log("Code contains one or more empty slots");
        this.setState((prevState) => ({
          showError: true,
        }));
        return;
      }
    }

    console.log("secretCode = " + this.state.secretCode.toString());
    if (this.state.secretCode.toString() === this.state.code.toString()) {

      alert("YOU WIN!");
    } else if(this.state.turn === 10) {
      // logic to give feedback
      alert("YOU LOSE!");
    } else {
      //this.gradeCode()
      this.setState((prevState) => ({
        turn: prevState.turn + 1,
        code: [0, 0, 0, 0],
        showError: false,
      }));
    }
  }

  handleCodeChange(slotIndex) {
    const code = this.state.code;
    if (code[slotIndex] === 5) {
      code[slotIndex] = 0;
    } else {
      code[slotIndex] += 1;
    }
    this.forceUpdate();
    console.log(this.state.code);
  }

  componentDidMount() {
    this.generateRandomCode();
  }

  render() {
    const status = 'Attempt: ' + this.state.turn.toString();
    return (
      <div className="game">
        <h1>Mastermind</h1>
        <h3 className="status">{status}</h3>
        <div className="game-board">
          <Board
          turn={this.state.turn}
          feedback={this.state.feedback}
          onCodeChange={this.handleCodeChange}/>
        </div>
        <div className="game-info">
          <button onClick={this.handleEnterCode}>Enter Code!</button>
          <ErrorMessage warn={this.state.showError} />
        </div>
      </div>
    );
  }
}

export default Game;
