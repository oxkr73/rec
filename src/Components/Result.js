import React, { Component } from "react";
import "./Result.css";
import Row1Logo from "./Blocks/Row1Logo";
import Row2Logo from "./Blocks/Row2Logo";
import FullWidthImage from "./Blocks/FullWidthImage";
import FullWidthText from "./Blocks/FullWidthText";
import Spacer from "./Blocks/Spacer";
import Row1Button from "./Blocks/Row1Button";
import Row2Buttons from "./Blocks/Row2Buttons";
import Row2Columns from "./Blocks/Row2Columns";
import Row4Elements from "./Blocks/Row4Elements";
import List3Center from "./Blocks/List3Center";
import FullWidthFooter from "./Blocks/FullWidthFooter";
import Row2Boxes from "./Blocks/Row2Boxes";
import Columns2Text from "./Blocks/Columns2Text";
import TextInBox from "./Blocks/TextInBox";

class Result extends Component {
  state = {};

  render() {
    return (
      <table
        id="mainTable"
        width="100%"
        border="0"
        cellPadding="0"
        cellSpacing="0"
        align="center"
      >
        <tbody>
          <tr>
            <td
              width="100%"
              valign="top"
              bgcolor={this.props.globals.globalBkg}
              style={{
                paddingTop: this.props.globals.bodyPaddingTop + "px",
                paddingBottom: this.props.globals.bodyPaddingBottom + "px"
              }}
            >
              {this.props.stack.map((item, key) => {
                if (item.value === "Row1Logo") {
                  return (
                    <Row1Logo
                      key={key + item.slug}
                      id={key + "-" + item.slug}
                      globals={this.props.globals}
                      blockProps={item.blockProps}
                      openModal={this.props.openModal}
                      updateResult={this.props.updateResult}
                    />
                  );
                }
                if (item.value === "Row2Logo") {
                  return (
                    <Row2Logo
                      key={key + item.slug}
                      id={key + "-" + item.slug}
                      globals={this.props.globals}
                      blockProps={item.blockProps}
                      openModal={this.props.openModal}
                      updateResult={this.props.updateResult}
                    />
                  );
                }
                if (item.value === "FullWidthImage") {
                  return (
                    <FullWidthImage
                      key={key}
                      id={key + "-" + item.slug}
                      globals={this.props.globals}
                      blockProps={item.blockProps}
                      openModal={this.props.openModal}
                      updateResult={this.props.updateResult}
                    />
                  );
                }
                if (item.value === "FullWidthText") {
                  return (
                    <FullWidthText
                      key={key}
                      id={key + "-" + item.slug}
                      globals={this.props.globals}
                      blockProps={item.blockProps}
                      openModal={this.props.openModal}
                      updateResult={this.props.updateResult}
                    />
                  );
                }
                if (item.value === "Spacer") {
                  return (
                    <Spacer
                      key={key}
                      id={key + "-" + item.slug}
                      globals={this.props.globals}
                      blockProps={item.blockProps}
                      openModal={this.props.openModal}
                      updateResult={this.props.updateResult}
                    />
                  );
                }
                if (item.value === "Row1Button") {
                  return (
                    <Row1Button
                      key={key}
                      id={key + "-" + item.slug}
                      globals={this.props.globals}
                      blockProps={item.blockProps}
                      openModal={this.props.openModal}
                      updateResult={this.props.updateResult}
                    />
                  );
                }
                if (item.value === "Row2Buttons") {
                  return (
                    <Row2Buttons
                      key={key}
                      id={key + "-" + item.slug}
                      globals={this.props.globals}
                      blockProps={item.blockProps}
                      openModal={this.props.openModal}
                      updateResult={this.props.updateResult}
                    />
                  );
                }
                if (item.value === "Row2Columns") {
                  return (
                    <Row2Columns
                      key={key}
                      id={key + "-" + item.slug}
                      globals={this.props.globals}
                      blockProps={item.blockProps}
                      openModal={this.props.openModal}
                      updateResult={this.props.updateResult}
                    />
                  );
                }
                if (item.value === "Row4Elements") {
                  return (
                    <Row4Elements
                      key={key}
                      id={key + "-" + item.slug}
                      globals={this.props.globals}
                      blockProps={item.blockProps}
                      openModal={this.props.openModal}
                      updateResult={this.props.updateResult}
                    />
                  );
                }
                if (item.value === "List3Center") {
                  return (
                    <List3Center
                      key={key}
                      id={key + "-" + item.slug}
                      globals={this.props.globals}
                      blockProps={item.blockProps}
                      openModal={this.props.openModal}
                      updateResult={this.props.updateResult}
                    />
                  );
                }
                if (item.value === "FullWidthFooter") {
                  return (
                    <FullWidthFooter
                      key={key}
                      id={key + "-" + item.slug}
                      globals={this.props.globals}
                      blockProps={item.blockProps}
                      openModal={this.props.openModal}
                      updateResult={this.props.updateResult}
                    />
                  );
                }
                if (item.value === "Row2Boxes") {
                  return (
                    <Row2Boxes
                      key={key}
                      id={key + "-" + item.slug}
                      globals={this.props.globals}
                      blockProps={item.blockProps}
                      openModal={this.props.openModal}
                      updateResult={this.props.updateResult}
                    />
                  );
                }
                if (item.value === "Columns2Text") {
                  return (
                    <Columns2Text
                      key={key}
                      id={key + "-" + item.slug}
                      globals={this.props.globals}
                      blockProps={item.blockProps}
                      openModal={this.props.openModal}
                      updateResult={this.props.updateResult}
                    />
                  );
                }
                if (item.value === "TextInBox") {
                  return (
                    <TextInBox
                      key={key}
                      id={key + "-" + item.slug}
                      globals={this.props.globals}
                      blockProps={item.blockProps}
                      openModal={this.props.openModal}
                      updateResult={this.props.updateResult}
                    />
                  );
                }

                return (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${item.value} not found <br>`
                    }}
                  />
                );
              })}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Result;
