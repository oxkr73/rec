import React, { Component } from "react";

class Globals extends Component {
  state = {};
  globalBkg = React.createRef();
  globalTableBkg = React.createRef();
  globalBkg = React.createRef();
  globalWidth = React.createRef();
  bodyPaddingTop = React.createRef();
  bodyPaddingBottom = React.createRef();
  globalAlign = React.createRef();
  isResponsive = React.createRef();

  modifyGlobal = e => {
    e.preventDefault();
    const globalValues = {
      globalBkg: this.globalBkg.current.value,
      globalTableBkg: this.globalTableBkg.current.value,
      globalWidth: this.globalWidth.current.value,
      bodyPaddingTop: this.bodyPaddingTop.current.value,
      bodyPaddingBottom: this.bodyPaddingBottom.current.value,
      globalAlign: this.globalAlign.current.value,
      isResponsive: this.isResponsive.current.checked
    };

    this.props.addToGlobal(globalValues);
  };
  render() {
    return (
      <form onSubmit={this.modifyGlobal}>
        <div className="form-group">
          <label>Background color</label>
          <input
            ref={this.globalBkg}
            type="color"
            name="global-bkg"
            defaultValue="#dedede"
          />
        </div>
        <div className="form-group">
          <label>Table bkg color</label>
          <input
            ref={this.globalTableBkg}
            type="color"
            name="global-table-color"
            defaultValue="#ffffff"
          />
        </div>
        <div className="form-group">
          <label>Width</label>
          <input
            ref={this.globalWidth}
            type="number"
            name="global-width"
            defaultValue="600"
          />
        </div>
        <div className="form-group">
          <label>Body Padding Top</label>
          <input
            ref={this.bodyPaddingTop}
            type="number"
            name="body-pad-top"
            defaultValue="15"
          />
        </div>
        <div className="form-group">
          <label>Body Padding Bottom</label>
          <input
            ref={this.bodyPaddingBottom}
            type="number"
            name="body-pad-bottom"
            defaultValue="15"
          />
        </div>
        <div className="form-group">
          <label>Align</label>
          <select
            ref={this.globalAlign}
            name="global-align"
            defaultValue="center"
          >
            <option value="center">center</option>
            <option value="left">left</option>
            <option value="right">right</option>
          </select>
        </div>
        <div className="form-group">
          <label>Responsive</label>
          <input
            ref={this.isResponsive}
            type="checkbox"
            name="responsive"
            defaultChecked="true"
          />
        </div>
        <button>Apply</button>
      </form>
    );
  }
}

export default Globals;
