import React, { Component } from 'react';
class Row2Buttons extends Component {
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
                        <td width="48%" bgcolor="#ffffff" style={{ padding: "15px 0" }}
                            onMouseOver={this.handleShow}
                            onMouseLeave={this.handleHide}>

                            {removeBtn}

                            <table width="150" border="0" cellPadding="0" cellSpacing="0" align="right">
                                <tbody>
                                    <tr>
                                        <td style={{ padding: "15px 30px", textAlign: "center" }} bgcolor="#dddddd" className="center">
                                            <a href="/" style={{ textDecoration: "none", color: "#000000", fontFamily: "Arial, Helvetica, sans-serif" }}>BUTTON</a>
                                        </td>
                                        <td width="10" style={{ width: "10px" }}>&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td width="48%" bgcolor="#ffffff" style={{ padding: "15px 0" }}
                            onMouseOver={this.handleShow}
                            onMouseLeave={this.handleHide}>
                            <table width="150" border="0" cellPadding="0" cellSpacing="0" align="left">
                                <tbody>
                                    <tr>
                                        <td width="10" style={{ width: "10px" }}>&nbsp;</td>
                                        <td style={{ padding: "15px 30px", textAlign: "center" }} bgcolor="#dddddd" className="center">
                                            <a href="/" style={{ textDecoration: "none", color: "#000000", fontFamily: "Arial, Helvetica, sans-serif" }}>BUTTON</a>
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

export default Row2Buttons;