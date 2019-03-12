import React, { Component } from "react";

class Result extends Component {
  state = {};
  innerHtml = () => {
    console.log(this.props.result.join(""));
  };
  render() {
    const inHTML = this.props.result.join("");
    this.innerHtml();
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: inHTML
        }}
      />
    );
  }
}

export default Result;
