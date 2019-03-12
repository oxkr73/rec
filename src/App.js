import React, { Component } from "react";
import Blocks from "./data";
import BlocksGrid from "./Components/BlocksGrid";
import Result from "./Components/Result";
import "./App.css";

class App extends Component {
  state = {
    result: []
  };
  addToResult = item => {
    console.log("adding", item);
    const currentResult = [...this.state.result, item.html];
    console.log(currentResult);
    this.setState({
      result: currentResult
    });
  };
  render() {
    //console.log(Blocks);
    return (
      <div className="App">
        <BlocksGrid blocks={Blocks} addToResult={this.addToResult} />
        <hr />
        <Result result={this.state.result} />
      </div>
    );
  }
}

export default App;
