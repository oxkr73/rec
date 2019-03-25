import React, { Component } from "react";
import Block from "./Block";
import "./Block.css"

class BlocksGrid extends Component {
  state = {};
  render() {
    return (
      <div className="grid-blocks row">
        <div className="col s12">
          {this.props.blocks.map((block, key) => (
            <Block key={key} dataBlock={block} addToResult={this.props.addToResult} />
          ))}
        </div>
      </div>
    );
  }
}

export default BlocksGrid;
