import React, { Component } from "react";
import Blocks from "./data";
import BlocksGrid from "./Components/BlocksGrid";
import Result from "./Components/Result";
import "./App.css";

class App extends Component {
  state = {
    result: [],
    stack: []
  };
  addToResult = item => {
    //console.log("adding", item);
    const currentResult = [...this.state.result, item.html];
    const currentStack = [...this.state.stack, item];
    //console.log(currentResult);
    this.setState({
      result: currentResult,
      stack: currentStack
    });
  };
  render() {
    //console.log(Blocks);
    return (
      <div className="App">
        <BlocksGrid blocks={Blocks} addToResult={this.addToResult} />
        <hr />
        <Result result={this.state.result} stack={this.state.stack} />
      </div>
    );
  }
}

export default App;
