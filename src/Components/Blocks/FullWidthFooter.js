import React, { Component } from 'react';
class FullWidthFooter extends Component {
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
                bgcolor={this.props.globals.globalBkg}
                className={this.props.globals.isResponsive ? "deviceWidth" : null}
                style={{ margin: "0 auto" }}>
                <tbody>
                    <tr>
                        <td style={{ fontSize: "10px", color: "#666666", fontWeight: "normal", textAlign: "left", fontStyle: "italic", fontFamily: "Arial, Helvetica, sans-serif", lineHeight: "13px", verticalAlign: "top", padding: "15px 0" }}
                            onMouseOver={this.handleShow}
                            onMouseLeave={this.handleHide}>

                            {removeBtn}

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur sodales aliquet. Maecenas
                            rutrum metus id accumsan convallis. Ut pharetra, libero in rhoncus efficitur, ante elit tincidunt nisi,
                            quis varius arcu velit vitae eros. Proin varius, ipsum ut fermentum tincidunt, mauris mi finibus ligula,
                            a varius mauris ex et leo. Cras et urna ullamcorper, iaculis nibh vitae, imperdiet volutpat.
                    </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default FullWidthFooter;