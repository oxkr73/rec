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
  handleRemove = e => {
    this.props.updateResult(this.props.id);
  };
  render() {
    let removeBtn = this.state.isRemoveVisible ? (
      <div>
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
            <td height="15" style={{ fontSize: "15px", lineHeight: "15px" }}
              onMouseEnter={this.handleShow}
              onMouseOut={this.handleHide}
            >
              {removeBtn}
              &nbsp;
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Spacer;
