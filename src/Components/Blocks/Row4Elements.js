import React, { Component } from 'react';

class Row4Elements extends Component {
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
                        <td width="100%" bgcolor="#ffffff" style={{ fontSize: "14px", lineHeight: "16px", padding: "0 0 15px 0" }}
                            className="deviceWidth noPadding"
                            onMouseOver={this.handleShow}
                            onMouseLeave={this.handleHide}>

                            {removeBtn}

                            <table width="100%" border="0" cellPadding="0" cellSpacing="0" align="center"
                                className={this.props.globals.isResponsive ? "deviceWidth" : null}
                                style={{ margin: "0 auto" }}>
                                <tbody>
                                    <tr>
                                        <td width="100%">
                                            <table width="48%" border="0" cellPadding="0" cellSpacing="0" align="left" style={{ margin: 0 }}
                                                className={this.props.globals.isResponsive ? "deviceWidth" : null}>
                                                <tbody>
                                                    <tr>
                                                        <td align="left" valign="top" width="44" style={{ padding: "0 10px 0 15px" }}>
                                                            <img src="https://placehold.it/50x50?text=A" alt="A" border="0" align="left" />
                                                        </td>
                                                        <td align="left" valign="top" width="90%"
                                                            style={{ fontSize: "12px", lineHeight: "14px", paddingTop: "5px", height: "65px", fontFamily: "Arial, Helvetica, sans-serif;" }}>
                                                            <b
                                                                style={{ color: "#e04831", fontFamily: "Arial, Helvetica, sans-serif" }}>Lorem</b><br />
                                                            Iste natus error sit voluptatem accusantium doloremque
									                </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table width="48%" border="0" cellPadding="0" cellSpacing="0" align="left" style={{ margin: "0" }}
                                                className={this.props.globals.isResponsive ? "deviceWidth" : null}>
                                                <tbody>
                                                    <tr>
                                                        <td align="left" valign="top" width="44" style={{ padding: "0 10px 0 15px" }}>
                                                            <img src="https://placehold.it/50x50?text=B" alt="B" border="0" align="left" />
                                                        </td>
                                                        <td align="left" valign="top" width="90%"
                                                            style={{ fontSize: "12px", lineHeight: "14px", paddingTop: "5px", height: "65px", fontFamily: "Arial, Helvetica, sans-serif" }}>
                                                            <b
                                                                style={{ color: "#e04831", fontFamily: "Arial, Helvetica, sans-serif" }}>Lorem</b><br />
                                                            Iste natus error sit voluptatem accusantium doloremque
									                    </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="100%">
                                            <table width="48%" border="0" cellPadding="0" cellSpacing="0" align="left" style={{ margin: "0" }}
                                                className={this.props.globals.isResponsive ? "deviceWidth" : null}>
                                                <tbody>
                                                    <tr>
                                                        <td align="left" valign="top" width="44" style={{ padding: "0 10px 0 15px" }}>
                                                            <img src="https://placehold.it/50x50?text=C" alt="C" border="0" align="left" />
                                                        </td>
                                                        <td align="left" valign="top" width="90%"
                                                            style={{ fontSize: "12px", lineHeight: "14px", paddingTop: "5px", height: "65px", fontFamily: "Arial, Helvetica, sans-serif" }}>
                                                            <b
                                                                style={{ color: "#e04831", fontFamily: "Arial, Helvetica, sans-serif" }}>Lorem</b><br />
                                                            Iste natus error sit voluptatem accusantium doloremque
									                    </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table width="48%" border="0" cellPadding="0" cellSpacing="0" align="left" style={{ margin: "0" }}
                                                className={this.props.globals.isResponsive ? "deviceWidth" : null}>
                                                <tbody>
                                                    <tr>
                                                        <td align="left" valign="top" width="44" style={{ padding: "0 10px 0 15px" }}>
                                                            <img src="https://placehold.it/50x50?text=D" alt="D" border="0" align="left" />
                                                        </td>
                                                        <td align="left" valign="top" width="90%"
                                                            style={{ fontSize: "12px", lineHeight: "14px", paddingTop: "5px", height: "65px", fontFamily: "Arial, Helvetica, sans-serif" }}>
                                                            <b style={{ color: "#e04831", fontFamily: "Arial, Helvetica, sans-serif" }}>
                                                                Lorem</b><br />
                                                            Iste natus error sit voluptatem accusantium doloremque
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
            </table>);
    }
}

export default Row4Elements;