import React, { Component } from 'react';

class Row2Columns extends Component {
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
                        <td className="center noPadding" style={{ padding: "10px 10px 0" }}
                            onMouseOver={this.handleShow}
                            onMouseLeave={this.handleHide}>

                            {removeBtn}

                            <table width="48%" border="0" cellPadding="0" cellSpacing="0" align="left" className={this.props.globals.isResponsive ? "deviceWidth" : null}>
                                <tbody>
                                    <tr>
                                        <td align="center">
                                            <p style={{ msoTableLspace: 0, msoTableRspace: 0, margin: 0 }}>
                                                <a href="/">
                                                    <img width="252" src="https://placehold.it/252x150?text=IMAGE" style={{ width: "252px" }} alt="" border="0" className={this.props.globals.isResponsive ? "deviceWidth" : null} />
                                                </a>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontSize: "12px", color: "#959595", fontWeight: "normal", textAlign: "left", fontFamily: "Arial, sans-serif", lineHeight: "24px", verticalAlign: "top", padding: "10px 8px 10px 8px" }}>
                                            <table style={{ borderBottom: "1px solid #333" }}>
                                                <tbody>
                                                    <tr>
                                                        <td valign="top" style={{ padding: "0 10px 10px 0" }}>
                                                            <img src="https://placehold.it/50x50?text=IMAGE" alt="" border="0" align="left" />
                                                        </td>
                                                        <td valign="middle" style={{ padding: "0 10px 10px 0" }}><a href="/" style={{ textDecoration: "none", fontSize: "16px", color: "#363636", fontWeight: "bold", fontFamily: "Arial, sans-serif " }}>Two column - text below</a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table width="48%" border="0" cellPadding="0" cellSpacing="0" align="right" className={this.props.globals.isResponsive ? "deviceWidth" : null}>
                                <tbody>
                                    <tr>
                                        <td align="center">
                                            <p style={{ msoTableLspace: 0, msoTableRspace: 0, margin: 0 }}>
                                                <a href="/">
                                                    <img width="252" src="https://placehold.it/252x150?text=IMAGE" style={{ width: "252px" }} alt="" border="0" className={this.props.globals.isResponsive ? "deviceWidth" : null} />
                                                </a>
                                            </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ fontSize: "12px", color: "#959595", fontWeight: "normal", textAlign: "left", fontFamily: "Arial, sans-serif", lineHeight: "24px", verticalAlign: "top", padding: "10px 8px 10px 8px" }}>
                                            <table style={{ borderBottom: "1px solid #333" }}>
                                                <tbody>
                                                    <tr>
                                                        <td valign="top" style={{ padding: "0 10px 10px 0" }}>
                                                            <img src="https://placehold.it/50x50?text=IMAGE" alt="" border="0" align="left" />
                                                        </td>
                                                        <td valign="middle" style={{ padding: "0 10px 10px 0" }}><a href="/" style={{ textDecoration: "none", fontSize: "16px", color: "#363636", fontWeight: "bold", fontFamily: "Arial, sans-serif " }}>Two column - text below</a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <p>Iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </td>
                    </tr>
                </tbody>
            </table >
        );
    }
}

export default Row2Columns;