import React, { Component } from 'react';

class Row2Boxes extends Component {
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
            <div className="edit-button">
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
                style={{ margin: "0 auto" }}>
                <tbody>
                    <tr>
                        <td className="center" style={{ paddingTop: "15px" }}
                            onMouseOver={this.handleShow}
                            onMouseLeave={this.handleHide}>

                            {removeBtn}

                            <table width="48%" border="0" cellPadding="0" cellSpacing="0" align="left" className={this.props.globals.isResponsive ? "deviceWidth" : null}>
                                <tbody>
                                    <tr>
                                        <td
                                            style={{ fontSize: "14px", color: "#959595", fontWeight: "normal", textAlign: "center", fontFamily: "Arial, Helvetica, sans-serif", lineHeight: "17px", verticalAlign: "top", paddingLeft: "15px" }}>
                                            <table border="0" cellPadding="0" cellSpacing="0" className="leftAlignMblImg" align="left"
                                                style={{ width: "100%", textAlign: "center" }}>
                                                <tbody>
                                                    <tr>
                                                        <td valign="top">
                                                            <img src="https://placehold.it/50x50?text=IMAGE" alt="" border="0" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table width="100%" className="hiddenMbl">
                                                <tbody>
                                                    <tr>
                                                        <td width="100%">&nbsp;</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table border="0" cellPadding="0" cellSpacing="0" className="leftAlignMblText" align="left"
                                                style={{ width: "100%", textAlign: "center" }}>
                                                <tbody>
                                                    <tr>
                                                        <td valign="middle" style={{ padding: "0 10px 10px 10px" }}>
                                                            <a href="/"
                                                                style={{ textDecoration: "none", fontSize: "16px", lineHeight: "19px", color: "#363636", fontWeight: "bold", fontFamily: "Arial, Helvetica, sans-serif" }}>
                                                                Two column - text below</a><br />
                                                            Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                            cupidatat non proident.
									                    </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table width="48%" border="0" cellPadding="0" cellSpacing="0" align="right" className="deviceWidth">
                                <tbody>
                                    <tr>
                                        <td
                                            style={{ fontSize: "14px", color: "#959595", fontWeight: "normal", textAlign: "center", fontFamily: "Arial, Helvetica, sans-serif", lineHeight: "17px", verticalAlign: "top", paddingLeft: "15px" }}>
                                            <table border="0" cellPadding="0" cellSpacing="0" className="leftAlignMblImg" align="left"
                                                style={{ width: "100%", textAlign: "center" }}>
                                                <tbody>
                                                    <tr>
                                                        <td valign="top">
                                                            <img src="https://placehold.it/50x50?text=IMAGE" alt="" border="0" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table width="100%" className="hiddenMbl">
                                                <tbody>
                                                    <tr>
                                                        <td width="100%">&nbsp;</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table border="0" cellPadding="0" cellSpacing="0" className="leftAlignMblText" align="left"
                                                style={{ width: "100%", textAlign: "center" }}>
                                                <tbody>
                                                    <tr>
                                                        <td valign="middle" style={{ padding: "0 10px 10px 10px" }}>
                                                            <a href="/"
                                                                style={{ textDecoration: "none", fontSize: "16px", lineHeight: "19px", color: "#363636", fontWeight: "bold", fontFamily: "Arial, Helvetica, sans-serif" }}>
                                                                Two column - text below</a><br />
                                                            Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                            cupidatat non proident.
									                    </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default Row2Boxes;