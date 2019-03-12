import React, { Component } from "react";
import Header1Logo from "./Blocks/Header1Logo";

class Result extends Component {
  state = {};
  render() {
    const inHTML = this.props.result.join("");
    console.log(this.props.stack);
    return (
      //   <div
      //     dangerouslySetInnerHTML={{
      //       __html: inHTML
      //     }}
      //   />
      <div>
        {this.props.stack.map((item, key) => {
          if (item.value === "Header1Logo") {
            return <Header1Logo key={key} />;
          }
          return "No items";
        })}
      </div>
    );
  }
}

export default Result;
