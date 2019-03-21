import React, { Component } from 'react';

class Spacer extends Component {
    state = {}
    render() {
        return (
            <table width="600" className="deviceWidth" border="0" cellPadding="0" cellSpacing="0" align="center" bgcolor="#ffffff"
                style={{ margin: "0 auto;" }}>
                <tbody>
                    <tr>
                        <td height="15" style={{ fontSize: "15px", lineHeight: "15px" }}></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Spacer;