import React from "react";
import Button from "./button.js";

const divStyle = {
  display: "flex"
};
class Footer extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <Button classes="button -tertiary center medium" buttonName="Back" />
        <Button classes="button -primary center medium" buttonName="Continue" />
      </div>
    );
  }
}

module.exports = Footer;
