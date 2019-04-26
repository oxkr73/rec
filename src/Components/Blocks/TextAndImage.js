import React, { Component } from 'react';
class TextAndImage extends Component {
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
    handleRemove = e => {
        this.props.updateResult(this.props.id);
    };
    render() {
        let removeBtn = this.state.isRemoveVisible ? (
            <div>
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
                        <td style="padding:10px 0"
                            onMouseEnter={this.handleShow}
                            onMouseOut={this.handleHide}>
                            {removeBtn}
                            <table align="right" width="49%" cellpadding="0" cellspacing="0" border="0" class="deviceWidth">
                                <tbody>
                                    <tr>
                                        <td valign="top" align="right" class="center" style="padding:20px 10px 0 0">
                                            <p style="mso-table-lspace:0;mso-table-rspace:0; margin:0"><a href="#"><img width="267" src="https://placehold.it/267x100?text=IMAGE" alt="" border="0" style="border-radius: 4px; width: 267px; display: block;" class="deviceWidth" /></a></p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="left" width="49%" cellpadding="0" cellspacing="0" border="0" class="deviceWidth">
                                <tbody>
                                    <tr>
                                        <td style="font-size: 13px; color: #959595; font-weight: normal; text-align: left; font-family: Georgia, Times, serif; line-height: 24px; vertical-align: top; padding:20px 0 20px 15px">

                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td valign="top" style="padding:0 10px 15px 0">
                                                            <img src="https://placehold.it/40x40?text=IMAGE" alt="" border="0" align="left" />
                                                        </td>
                                                        <td valign="middle" style="padding:0 10px 10px 0"><a href="#" style="text-decoration: none; font-size: 16px; color: #363636; font-weight: bold; font-family:Arial, sans-serif ">Two column - text left</a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <p style="mso-table-lspace:0;mso-table-rspace:0; margin:0">
                                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
                                            <br /><br />

                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>);
    }
}

export default TextAndImage;