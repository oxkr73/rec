import React, { Component } from "react";

class Header2Logo extends Component {
  state = {};
  TdStyleLeft = {
    padding: "10px 20px",
    "text-align": "left"
  };
  TdStyleRight = {
    padding: "10px 20px",
    "text-align": "right"
  };
  ImgStyle = {
    display: "block",
    margin: 0
  };
  render() {
    return (
      <table
        width={this.props.mainAttr.width}
        border="0"
        cellPadding="0"
        cellSpacing="0"
        align={this.props.mainAttr.horzAlign}
        className="deviceWidth"
        onClick={this.props.onClick}
        //style="margin:0 auto;"
      >
        <tbody>
          <tr>
            <td width="100%" bgcolor="#ffffff">
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                align={this.TdStyleLeft["text-align"]}
                className="deviceWidth"
              >
                <tbody>
                  <tr>
                    <td style={this.TdStyleLeft} className="left">
                      <a href="/">
                        <img
                          src="https://placehold.it/120x40?text=LOGO"
                          alt=""
                          border="0"
                          style={this.ImgStyle}
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                align="right"
                className="deviceWidth"
              >
                <tbody>
                  <tr>
                    <td style={this.TdStyleRight} className="right">
                      <a href="/">
                        <img
                          src="https://placehold.it/120x40?text=LOGO"
                          alt=""
                          border="0"
                          style={this.ImgStyle}
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Header2Logo;
