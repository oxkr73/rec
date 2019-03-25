import React, { Component } from "react";

class Row2Logo extends Component {
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
  TdStyleLeft = {
    padding: "15px",
    textAlign: "left"
  };
  TdStyleRight = {
    padding: "15px",
    textAlign: "right"
  };
  ImgStyle = {
    margin: 0,
    border: 0
  };

  handleClick = e => {
    e.preventDefault();
    const newProps = {
      blockId: this.props.id,
      newProps: this.props.blockProps
    };
    this.props.openModal(newProps);
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
        style={{ margin: "0 auto" }}
      >
        <tbody>
          <tr>
            <td width="100%" bgcolor="#ffffff"
              onMouseOver={this.handleShow}
              onMouseLeave={this.handleHide}>
              {removeBtn}
              <table
                width="49%"
                border="0"
                cellPadding="0"
                cellSpacing="0"
                align={this.TdStyleLeft["textAlign"]}
              >
                <tbody>
                  <tr>
                    <td style={{ padding: "15px", textAlign: "left" }} className="left">
                      <a href="/">
                        <img
                          src="https://placehold.it/120x40?text=IMAGE"
                          alt=""
                          border="0"
                          style={this.ImgStyle}
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                width="49%"
                border="0"
                cellPadding="0"
                cellSpacing="0"
                align="right"
              >
                <tbody>
                  <tr>
                    <td style={{ padding: "15px", textAlign: "right" }} className="right">
                      <a href="/">
                        <img
                          src="https://placehold.it/120x40?text=IMAGE"
                          alt=""
                          border="0"
                          style={this.ImgStyle}
                        />
                      </a>
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

export default Row2Logo;
