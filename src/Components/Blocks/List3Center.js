import React, { Component } from 'react';

class List3Center extends Component {
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
                        <td width="100%" bgcolor="#ffffff" style={{ padding: "15px 0" }}
                            onMouseOver={this.handleShow}
                            onMouseLeave={this.handleHide}>

                            {removeBtn}

                            <table width="400" border="0" cellPadding="0" cellSpacing="0" align="center"
                                className={this.props.globals.isResponsive ? "deviceWidth" : null}
                                style={{ margin: "0 auto" }}>
                                <tbody>
                                    <tr>
                                        <td valign="top">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ padding: "0 10px 0 15px" }}>
                                                            <img src="https://placehold.it/40x40?text=1" alt="1" border="0" align="left" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td style={{ fontSize: "11px", color: "#656565", textAlign: "left", paddingRight: "15px" }} valign="middle">
                                            <a href="/"
                                                style={{ fontSize: "14px", fontWeight: "bold", color: "#000000", textAlign: "left", textDecoration: "none" }}>
                                                Lorem ipsum dolor sit amet orci aliquam.</a><br />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo cras amet.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ padding: "0 10px 0 15px" }}>
                                                            <img src="https://placehold.it/40x40?text=1" alt="1" border="0" align="left" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td style={{ fontSize: "11px", color: "#656565", textAlign: "left", paddingRight: "15px" }} valign="middle">
                                            <a href="/"
                                                style={{ fontSize: "14px", fontWeight: "bold", color: "#000000", textAlign: "left", textDecoration: "none" }}>
                                                Lorem ipsum dolor sit amet orci aliquam.</a><br />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo cras amet.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td valign="top">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ padding: "0 10px 0 15px" }}>
                                                            <img src="https://placehold.it/40x40?text=1" alt="1" border="0" align="left" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td style={{ fontSize: "11px", color: "#656565", textAlign: "left", paddingRight: "15px" }} valign="middle">
                                            <a href="/"
                                                style={{ fontSize: "14px", fontWeight: "bold", color: "#000000", textAlign: "left", textDecoration: "none" }}>
                                                Lorem ipsum dolor sit amet orci aliquam.</a><br />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo cras amet.
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

export default List3Center;