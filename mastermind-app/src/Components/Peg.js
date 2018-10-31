import React, { Component } from 'react';
import '../Styles/Peg.css'


class Peg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //color: "black",
      counter: 0

    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    //const colors = ["red", "blue", "orange", "green", "yellow"];
    if (this.state.counter === 5) {
      this.setState({
        counter: this.counter = 0
      })
    } else {
      this.setState({
      counter: this.state.counter + 1
      })
    }
  }

  render(){
    const colors = ["black", "red", "blue", "orange", "green", "yellow"];
    var isDisabled = this.props.turn === this.props.row ? false : true;
    return (
      <button className="peg"
        disabled={isDisabled}
        onClick={this.handleClick}
        style={{backgroundColor: colors[this.state.counter]}}>{this.props.slot}</button>
    );
  }
}

export default Peg;
