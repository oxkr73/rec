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
    display: "block",
    margin: 0
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
        <button onClick={this.handleRemove}>Remove</button>
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
                border="0"
                cellPadding="0"
                cellSpacing="0"
                align={this.TdStyleLeft["textAlign"]}
                className={
                  this.props.globals.isResponsive ? "deviceWidth" : null
                }
              >
                <tbody>
                  <tr>
                    <td style={this.TdStyleLeft} className="left">
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
                border="0"
                cellPadding="0"
                cellSpacing="0"
                align="right"
                className={
                  this.props.globals.isResponsive ? "deviceWidth" : null
                }
              >
                <tbody>
                  <tr>
                    <td style={this.TdStyleRight} className="right">
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
