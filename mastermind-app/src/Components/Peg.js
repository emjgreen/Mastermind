import React, { Component } from 'react';
import '../Styles/Peg.css'


class Peg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    console.log("works")
  }

  render(){
    const colors = ["RED", "BLUE", "ORANGE", "GREEN", "YELLOW"];
    var isDisabled = this.props.turn === this.props.row ? false : true;
    return (
      <button className="peg" disabled={isDisabled} onClick={this.handleClick}>{this.props.slot}</button>
    );
  }
}

export default Peg;
