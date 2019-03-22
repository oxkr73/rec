import React, { Component } from "react";

class FullWidthText extends Component {
    state = {}
    render() {
        return (
            <table
                width="600"
                className={this.props.globals.isResponsive ? "deviceWidth" : null}
                border="0"
                cellPadding="0"
                cellSpacing="0"
                align="center"
                bgcolor="#eeeeed"
                style={{ margin: "0 auto;" }} >
                <tbody>
                    <tr>
                        <td style={{ fontSize: "14px", color: "#000000", fontWeight: "normal", textAlign: "left", fontFamily: "Arial, Helvetica, sans-serif", lineHeight: "16px", verticalAlign: "top", padding: "15px" }} bgcolor="#ffffff">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </td>
                    </tr>
                </tbody>
            </table>);
    }
}

export default FullWidthText;