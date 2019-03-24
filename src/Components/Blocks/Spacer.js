import React, { Component } from "react";

class Spacer extends Component {
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
  render() {
    let removeBtn = this.state.isRemoveVisible ? (
      <div>
        <button onClick={this.handleRemove}>Remove</button>
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
        onMouseEnter={this.handleShow}
        onMouseOut={this.handleHide}
      >
        <tbody>
          <tr>
            <td height="15" style={{ fontSize: "15px", lineHeight: "15px" }}>
              {removeBtn}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Spacer;
