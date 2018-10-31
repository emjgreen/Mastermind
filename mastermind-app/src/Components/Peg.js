import React, { Component } from 'react';
//import '../Styles/Peg.css';


class Peg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onColorChange(e.target.value, e.target.slot);
    if (this.state.counter === 5) {
      this.setState((prevState) => ({
        counter: prevState.counter = 0
      }));
    } else {
      this.setState((prevState) => ({
        counter: prevState.counter + 1
      }));
    }
  }

  render() {
    const colorIndex = this.props.colorIndex;
    const slotIndex = this.props.slot;
    const colors = ["black", "red", "blue", "orange", "green", "yellow"];
    var isDisabled = this.props.turn === this.props.row ? false : true;
    return (
      <button className="peg"
        disabled={isDisabled}
        onClick={this.handleClick}
        value={colorIndex}
        slot={slotIndex}
        style={{backgroundColor: colors[this.state.counter]}}
        >{this.props.slot}</button>
    );
  }
}

export default Peg;
