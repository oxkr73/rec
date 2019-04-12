import React, { Component } from "react";
//import M from "materialize-css";
//import mater from "./Materialize";
import cx from 'classnames';
import globalStyles from '../Assets/global-styles/bootstrap.min.module.css';

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
    //console.log(bootstrap)
    //M.AutoInit();
  }

  render() {
    return (
      <div className={globalStyles.row}>
        <form className={cx(globalStyles.col)} onSubmit={this.modifyGlobal}>
          <div className={globalStyles.row}>
            <div className={cx(globalStyles["form-group"], globalStyles["col-4"])}>
              <label htmlFor="global-bkg">Background color</label>
              <input
                className={globalStyles["form-control"]}
                ref={this.globalBkg}
                id="global-bkg"
                type="text"
                name="global-bkg"
                defaultValue="#eeeeee"
              />
            </div>
            <div className={cx(globalStyles["form-group"], globalStyles["col-4"])}>
              <label htmlFor="global-table-color">Table bkg color</label>
              <input
                className={globalStyles["form-control"]}
                ref={this.globalTableBkg}
                id="global-table-color"
                type="text"
                name="global-table-color"
                defaultValue="#ffffff"
              />
            </div>
            <div className={cx(globalStyles["form-group"], globalStyles["col-4"])}>
              <label htmlFor="global-width">Width</label>
              <input
                className={globalStyles["form-control"]}
                ref={this.globalWidth}
                id="global-width"
                type="number"
                name="global-width"
                defaultValue="600"
              />
            </div>
          </div>

          <div className={globalStyles.row}>
            <div className={cx(globalStyles["form-group"], globalStyles["col-4"])}>
              <label htmlFor="body-pad-top">Body Pad-Top</label>
              <input
                className={globalStyles["form-control"]}
                ref={this.bodyPaddingTop}
                id="body-pad-top"
                type="number"
                name="body-pad-top"
                defaultValue="15"
              />
            </div>
            <div className={cx(globalStyles["form-group"], globalStyles["col-4"])}>
              <label htmlFor="body-pad-bottom">Body Pad-Bottom</label>
              <input
                className={globalStyles["form-control"]}
                ref={this.bodyPaddingBottom}
                id="body-pad-bottom"
                type="number"
                name="body-pad-bottom"
                defaultValue="15"
              />
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
            <div className={cx(globalStyles["form-group"], globalStyles["col-4"])}>
              <div className={globalStyles["form-check"]}>
                <input
                  ref={this.isResponsive}
                  id="responsive"
                  type="checkbox"
                  name="responsive"
                  defaultChecked="true"
                  className={globalStyles["form-check-input"]}
                />
                <label htmlFor="responsive" className={globalStyles["form-check-label"]}> Responsive</label>
              </div>
            </div>

          </div>
          <div className={globalStyles.row}>
            <div className={globalStyles["col-sm"]}>
              <button className={cx(globalStyles.btn, globalStyles["btn-primary"])}>Apply</button>
            </div>
          </div>
        </form>
      </div >
    );
  }
}

export default Globals;
