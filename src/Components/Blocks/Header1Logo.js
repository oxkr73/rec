import React, { Component } from "react";

class Header1Logo extends Component {
  state = {};
  SelfAttr = {
    innerBgColor: "red",
    innerAlign: "left"
  };
  TableStyle = {
    margin: "0 auto"
  };
  TdStyle = {
    padding: "10px 20px",
    "text-align": "right"
  };
  ImgStyle = {
    display: "block",
    margin: 0
  };
  render() {
    console.log(this.props);
    return (
      <table
        width="{this.props.mainAttr.width}"
        border="0"
        cellPadding="0"
        cellSpacing="0"
        align="{this.props.mainAttr.horzAlign}"
        className="deviceWidth"
        onClick="{this.props.onClick}"
        style={this.TableStyle}
      >
        <tbody>
          <tr>
            <td width="100%" bgcolor={this.SelfAttr.innerBgColor}>
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                align="right"
                className="deviceWidth"
              >
                <tbody>
                  <tr>
                    <td
                      style={{ padding: "30px 30px", "text-align": "right" }}
                      className="right"
                    >
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

export default Header1Logo;
