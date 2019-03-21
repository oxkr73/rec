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
        align="{this.props.mainAttr.horzAlign}"
        bgcolor="#eeeeed"
        className="deviceWidth"
        //onClick={this.props.onClick}
        style={{ margin: "0 auto" }}
      >
        <tbody>
          <tr>
            <td
              valign="top"
              style={{ padding: 0 }}
              bgcolor="#ffffff"
            >
              <a href="/">
                <img
                  className="deviceWidth"
                  src="https://placehold.it/580x150?text=BANNER"
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
