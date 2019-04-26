import React, { Component } from 'react';

class ImageAndText extends Component {
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
                        <td style={{ padding: "10px 0" }}
                            onMouseEnter={this.handleShow}
                            onMouseOut={this.handleHide}>
                            {removeBtn}
                            <table align="left" width="49%" cellPadding="0" cellSpacing="0" border="0" className={this.props.globals.isResponsive ? "deviceWidth" : null}>
                                <tbody>
                                    <tr>
                                        <td valign="top" align="center" class="center" style={{ paddingTop: "20px" }}>
                                            <a href="#"><img width="267" src="https://placehold.it/267x100?text=IMAGE" alt="" border="0" style={{ width: "267px", display: "block" }} className={this.props.globals.isResponsive ? "deviceWidth" : null} /></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table align="right" width="49%" cellPadding="0" cellSpacing="0" border="0" className={this.props.globals.isResponsive ? "deviceWidth" : null}>
                                <tbody>
                                    <tr>
                                        <td style={{ fontSize: "14px", color: "#959595", fontWeight: "normal", textAlign: "left", fontFamily: "Arial, Helvetica, sans-serif", lineHeight: "17px", verticalAlign: "top", padding: "10px 8px 10px 8px" }}>

                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td valign="top" style={{ padding: "0 10px 10px 5px" }}>
                                                            <img src="https://placehold.it/40x40?text=IMAGE" alt="" border="0" align="left" />
                                                        </td>
                                                        <td valign="middle" style={{ padding: "0 10px 10px 0" }}><a href="/" style={{ textDecoration: "none", fontSize: "16px", color: "#ccc", fontWeight: "bold", fontFamily: "Arial, Helvetica, sans-serif" }}>Two column - text right</a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <p style="mso-table-lspace:0;mso-table-rspace:0; margin:0">
                                                Sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi.
                                    <br /><br />

                                                <table width="100" align="right">
                                                    <tbody>
                                                        <tr>
                                                            <td bgcolor="#409ea8" style={{ padding: "5px 0", backgroundColor: "#409ea8", borderTop: "1px solid #77d5ea" }} align="center">
                                                                <a href="/"
                                                                    style={{
                                                                        color: "#ffffff",
                                                                        fontSize: "13px",
                                                                        fontWeight: "bold",
                                                                        textAlign: "center",
                                                                        textDecoration: "none",
                                                                        fontFamily: "Arial, sans-serif",
                                                                        "-webkit-text-size-adjust": "none"
                                                                    }}>
                                                                    Read More
                                                </a>

                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

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

export default ImageAndText;