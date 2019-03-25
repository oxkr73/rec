import React, { Component } from "react";
import M from "materialize-css";
import "../../node_modules/materialize-css/dist/css/materialize.css"

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
      globalAlign: "center",//this.globalAlign.current.value,
      isResponsive: this.isResponsive.current.checked
    };

    this.props.addToGlobal(globalValues);
  };

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.modifyGlobal}>
          <div className="row">
            <div className="input-field col s4">
              <input
                ref={this.globalBkg}
                id="global-bkg"
                type="text"
                name="global-bkg"
                defaultValue="#dedede"
              />
              <label htmlFor="global-bkg">Background color</label>
            </div>
            <div className="input-field col s4">
              <input
                ref={this.globalTableBkg}
                id="global-table-color"
                type="text"
                name="global-table-color"
                defaultValue="#ffffff"
              />
              <label htmlFor="global-table-color">Table bkg color</label>
            </div>
            <div className="input-field col s4">
              <input
                ref={this.globalWidth}
                id="global-width"
                type="number"
                name="global-width"
                defaultValue="600"
              />
              <label htmlFor="global-width">Width</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s4">
              <input
                ref={this.bodyPaddingTop}
                id="body-pad-top"
                type="number"
                name="body-pad-top"
                defaultValue="15"
              />
              <label htmlFor="body-pad-top">Body Padding Top</label>
            </div>
            <div className="input-field col s4">
              <input
                ref={this.bodyPaddingBottom}
                id="body-pad-bottom"
                type="number"
                name="body-pad-bottom"
                defaultValue="15"
              />
              <label htmlFor="body-pad-bottom">Body Padding Bottom</label>
            </div>
            {/* <div className="form-group">
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
        </div> */}
            <div className="col s4">
              <label>
                <input
                  ref={this.isResponsive}
                  id="responsive"
                  type="checkbox"
                  name="responsive"
                  defaultChecked="true"
                  className="filled-in"
                />
                <span htmlFor="responsive">Responsive</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <button className="btn waves-effect">Apply</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Globals;
