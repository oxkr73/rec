import React, { Component } from 'react';

class Row1Button extends Component {
    state = {}
    render() {
        return (
            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" className="deviceWidth" style={{margin:"0 auto"}}>
                <tbody>
                    <tr>
                        <td width="100%" bgcolor="#ffffff">
                            <table border="0" cellpadding="0" cellspacing="0" align="center" className="deviceWidth">
                                <tbody>
                                    <tr>
                                        <td style={{padding:"15px 30px"}} bgcolor="#dddddd" className="center"><a href="/" style={{textDecoration:"none",color:"#000000",fontFamily: "Arial, Helvetica, sans-serif"}}>BUTTON</a></td>
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

export default Row1Button;