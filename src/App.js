import React, { Component } from "react";
import Globals from "./Components/Globals";
import Blocks from "./data";
import Layout from "./dataLayout";
import BlocksGrid from "./Components/BlocksGrid";
import Result from "./Components/Result";
import Modal from "./Components/Modal/Modal";
import "./App.css";

class App extends Component {
  state = {
    globals: {},
    result: [],
    stack: [],
    modalModProps: {},
    isModalOpen: false,
    showCode: false,
    finalCode: ''
  };

  openModalHandler = item => {
    console.log(item);
    this.setState({
      isModalOpen: true,
      modalModProps: item.newProps
    });
  };

  closeModalHandler = () => {
    this.setState({
      isModalOpen: false
    });
  };

  addToResult = item => {
    const currentResult = [...this.state.result, item.html];
    const currentStack = [...this.state.stack, item];

    const Head = Layout.Head;
    const Footer = Layout.Footer;
    const finalCode = Head + currentResult + Footer;

    this.setState({
      result: currentResult,
      stack: currentStack,
      finalCode
    });
  };

  addToGlobal = values => {
    const currentGlobal = values;
    this.setState({
      globals: currentGlobal
    });
  };

  handleShowCode = () => {
    const showCode = !this.state.showCode;
    this.setState({
      showCode
    });

  }

  showCode = () => {
    const Head = Layout.Head;
    const Footer = Layout.Footer;
    const finalCode = Head + this.state.result + Footer;
    console.log(finalCode);

    return finalCode;
  }

  render() {
    return (
      <div className="App">
        <Globals addToGlobal={this.addToGlobal} />
        {Object.keys(this.state.globals).length !== 0 ? (
          <BlocksGrid blocks={Blocks} addToResult={this.addToResult} />
        ) : null}
        <hr />
        <Result
          globals={this.state.globals}
          result={this.state.result}
          stack={this.state.stack}
          openModal={this.openModalHandler}
        />

        <button onClick={this.handleShowCode}>
          Show Code
          </button>

        {this.state.showCode ? (
          <div><br/>
            {this.state.finalCode}
          </div>) : null}

        {this.state.isModalOpen ? (
          <div onClick={this.closeModalHandler} className="back-drop" />
        ) : null}

        {/* <button className="open-modal-btn" onClick={this.openModalHandler}>
            Open Modal
          </button> */}

        <Modal
          className="modal"
          show={this.state.isModalOpen}
          close={this.closeModalHandler}
          blockProps={this.state.modalModProps}
        />
      </div>
    );
  }
}

export default App;
