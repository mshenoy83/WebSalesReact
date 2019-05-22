import React from "react";
import Button from "../common/button.js";
import Header from "../common/header.js";

class SelectIdentityForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header
          Title="Confirm your Identity"
          Description="Select a form of ID to add to your account.This helps us confirm your identity and secure your account."
          DescriptionClass="welcome-back"
        />
        <Button
          classes="button -secondary center medium widebutton"
          buttonName="AU DRIVERS LICENSE"
        />
        <Button
          classes="button -secondary center medium widebutton"
          buttonName="AU MEDICARE CARD"
        />
        <Button
          classes="button -secondary center medium widebutton"
          buttonName="AU PASSPORT"
        />
        <Button classes="button -tertiary center small" buttonName="BACK" />
      </React.Fragment>
    );
  }
}

module.exports = SelectIdentityForm;
