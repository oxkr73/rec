import React, { Component } from "react";
import cx from "classnames";

class Block extends Component {
  state = {};
  handleClick = e => {
    this.props.addToResult(this.props.dataBlock);
  };
  render() {
    return (<button className={cx("btn", this.props.dataBlock.value)} onClick={this.handleClick}>
      {this.props.dataBlock.label}
    </button>);
  }
}

export default Block;
