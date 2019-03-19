import React, { Component } from "react";
import "./Modal.css";

class modal extends Component {
  render() {
    const blockProps = Object.values(this.props.blockProps);
    const innerBlockProps = blockProps.join("");
    return (
      <div className="modal-container">
        <div
          className="modal-wrapper"
          style={{
            transform: this.props.show
              ? "translateY(0vh)"
              : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          <div className="modal-header">
            <h3>Modal Header</h3>
            <span className="close-modal-btn" onClick={this.props.close}>
              ×
            </span>
          </div>
          <div className="modal-body">
            {/* <p>{props.children}</p> */}
            <form>{innerBlockProps}</form>
          </div>
          <div className="modal-footer">
            <button className="btn-cancel" onClick={this.props.close}>
              CLOSE
            </button>
            <button className="btn-continue">CONTINUE</button>
          </div>
        </div>
      </div>
    );
  }
}

export default modal;
