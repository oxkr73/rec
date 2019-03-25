import React, { Component } from "react";

class FullWidthText extends Component {
  state = {
    isRemoveVisible: false
  };
  handleShow = () => {
    this.setState({
      isRemoveVisible: true
    });
  };
  handleHide = () => {
    this.setState({
      isRemoveVisible: false
    });
  };

  handleRemove = e => {
    this.props.updateResult(this.props.id);
  };

  render() {
    let removeBtn = this.state.isRemoveVisible ? (
      <div className="edit-button">
        <button className="btn-floating btn-small waves-effect red" onClick={this.handleRemove}>&times;</button>
      </div>
    ) : null;
    return (
      <table
        id={this.props.id}
        width={this.props.globals.globalWidth}
        border="0"
        cellPadding="0"
        cellSpacing="0"
        align={this.props.globals.globalAlign}
        bgcolor={this.props.globals.globalTableBkg}
        className={this.props.globals.isResponsive ? "deviceWidth" : null}
        style={{ margin: "0 auto" }}
      >
        <tbody>
          <tr>
            <td
              style={{
                fontSize: "14px",
                color: "#000000",
                fontWeight: "normal",
                textAlign: "left",
                fontFamily: "Arial, Helvetica, sans-serif",
                lineHeight: "16px",
                verticalAlign: "top",
                padding: "15px"
              }}
              bgcolor="#ffffff"
              onMouseOver={this.handleShow}
              onMouseLeave={this.handleHide}
            >
              {removeBtn}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default FullWidthText;
