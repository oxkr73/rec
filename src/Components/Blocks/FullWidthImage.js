import React, { Component } from "react";

class FullWidthImage extends Component {
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
  ImgStyle = {
    display: "block",
    margin: 0
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
            <td valign="top" style={{ padding: 0 }} bgcolor="#ffffff"
              onMouseOver={this.handleShow}
              onMouseLeave={this.handleHide}>
              {removeBtn}
              <a href="/">
                <img
                  className={
                    this.props.globals.isResponsive ? "deviceWidth" : null
                  }
                  src="https://placehold.it/600x150?text=IMAGE"
                  alt=""
                  border="0"
                  width="100%"
                  style={this.ImgStyle}
                />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default FullWidthImage;
