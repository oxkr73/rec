import React, { Component } from "react";
import Globals from "./Components/Globals";
import DataBlocks from "./data";
import Layout from "./dataLayout";
import BlocksGrid from "./Components/BlocksGrid";
import Result from "./Components/Result";
import Modal from "./Components/Modal/Modal";
import cx from 'classnames';
import globalStyles from './Assets/global-styles/bootstrap.min.module.css';
import "./App.css";

class App extends Component {
  state = {
    globals: {},
    result: [],
    stack: [],
    modalModProps: {},
    isModalOpen: false,
    showCode: false,
    finalCode: ""
  };

  openModalHandler = item => {
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

    this.setState({
      result: currentResult,
      stack: currentStack
    });
  };

  updateResult = data => {
    const idx = Number(data.charAt(0));
    const currentResult = this.state.result;
    const currentStack = this.state.stack;

    currentResult.splice(idx, 1);
    currentStack.splice(idx, 1);

    this.setState({
      result: currentResult,
      stack: currentStack
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
    const finalCode = this.resultCode();

    this.setState({
      showCode,
      finalCode
    });

  };

  resultCode = () => {
    const Head = Layout.Head;
    const HeadResponsive = Layout.HeadResponsive;
    const bodyResult = this.state.result.join("");
    const Footer = Layout.Footer;

    const finalCode = this.state.globals.isResponsive
      ? HeadResponsive + bodyResult + Footer
      : Head + bodyResult + Footer;

    return finalCode;
  };

  render() {
    return (
      <div className={cx("App", globalStyles["container-fluid"])}>
        <div className={globalStyles.row}>
          <div className={cx(globalStyles["col-12"], globalStyles["col-lg-4"])}>
            <Globals addToGlobal={this.addToGlobal} />
            {Object.keys(this.state.globals).length !== 0 ? (
              <BlocksGrid blocks={DataBlocks} addToResult={this.addToResult} />
            ) : null}
            <hr />
          </div>

          <div className={cx(globalStyles["col-12"], globalStyles["col-lg-8"])}>
            <Result
              globals={this.state.globals}
              result={this.state.result}
              stack={this.state.stack}
              openModal={this.openModalHandler}
              updateResult={this.updateResult}
            />

            <div className={globalStyles.row}>
              <div className={globalStyles["col-12"]}>
                <br />
                <button className={cx(globalStyles.btn, globalStyles["btn-info"])} onClick={this.handleShowCode}>Code</button>
              </div>
            </div>

            {this.state.showCode ? (
              <div>
                <br />
                {this.state.finalCode}
              </div>
            ) : null}
          </div>

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
      </div>
    );
  }
}

export default App;
