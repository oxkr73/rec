import React, { Component } from "react";

class Block extends Component {
  state = {};
  handleClick = e => {
    this.props.addToResult(this.props.dataBlock);
  };
  render() {
    return <button className="btn waves-effect" onClick={this.handleClick}>{this.props.dataBlock.label}</button>;
  }
}

export default Block;
