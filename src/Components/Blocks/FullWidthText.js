import React, { Component } from "react";

class FullWidthText extends Component {
    state = {}
    render() {
        return (
            <table
                width="580"
                className="deviceWidth"
                border="0"
                cellPadding="0"
                cellSpacing="0"
                align="center"
                bgcolor="#eeeeed"
                style={{ margin: "0 auto;" }} >

                <tr>
                    <td style={{ fontSize: "13px", color: "#959595", fontWeight: "normal", textAlign: "left", fontFamily: "Georgia, Times, serif", lineHeight: "24px", verticalAlign: "top", padding: "10px 8px 10px 8px" }} bgcolor="#eeeeed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </td>
                </tr>
            </table>);
    }
}

export default FullWidthText;