import React, { Component } from "react";

class FullWidthImage extends Component {
  state = {};
  ImgStyle = {
    display: "block",
    margin: 0
  };
  render() {
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
            <td valign="top" style={{ padding: 0 }} bgcolor="#ffffff">
              <a href="/">
                <img
                  className={
                    this.props.globals.isResponsive ? "deviceWidth" : null
                  }
                  src="https://placehold.it/580x150?text=IMAGE"
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
