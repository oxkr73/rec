import React, { Component } from "react";

class Row1Logo extends Component {
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

  SelfAttr = {
    innerBgColor: this.props.blockProps.bkgColor,
    innerAlign: this.props.blockProps.align
  };
  TdStyle = {
    padding: this.props.blockProps.padding,
    textAlign: this.props.blockProps.align
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
            <td
              width="100%"
              bgcolor={this.SelfAttr.innerBgColor}
              onMouseOver={this.handleShow}
              onMouseLeave={this.handleHide}
            >
              {removeBtn}
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                align={this.props.blockProps.align}
                className={
                  this.props.globals.isResponsive ? "deviceWidth" : null
                }
              >
                <tbody>
                  <tr>
                    <td style={this.TdStyle} className="right">
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

export default Row1Logo;
