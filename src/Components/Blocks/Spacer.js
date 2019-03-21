import React, { Component } from 'react';

class Spacer extends Component {
    state = {}
    render() {
        return (
            <table width="580" class="deviceWidth" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#ffffff"
                style={{margin:"0 auto;"}}>
                <tr>
                    <td height="15" style={{fontSize: "15px",lineHeight: "15px"}}></td>
                </tr>
            </table>
        );
    }
}

export default Spacer;