import React, { Component } from "react";
import Block from "./Block";
class BlocksGrid extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.blocks.map((block, key) => (
          <Block key={key} info={block} addToResult={this.props.addToResult} />
        ))}
      </div>
    );
  }
}

export default BlocksGrid;
