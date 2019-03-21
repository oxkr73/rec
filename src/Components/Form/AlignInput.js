import React, { PureComponent } from 'react';

class AlignInput extends Component {
  state = {}
  al = React.createRef();
  modifyValue = e => {
    e.preventDefault();
    const values = {
      globalAlign: this.globalAlign.current.value
    };

  };
  render() {
    return (
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
      </div>);
  }
}

export default AlignInput;