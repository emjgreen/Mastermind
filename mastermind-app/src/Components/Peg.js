import React, { Component } from 'react';

class Peg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: null,
    };
  }

  render(){
    return (
      <button className="peg">{this.props.value}</button>
    );
  }
}

export default Peg;
