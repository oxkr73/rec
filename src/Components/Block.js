import React, { Component } from "react";

class Block extends Component {
  state = {};
  handleClick = e => {
    console.log("click");
    this.props.addToResult(this.props.info);
  };
  render() {
    return <button onClick={this.handleClick}>{this.props.info.label}</button>;
  }
}

export default Block;
