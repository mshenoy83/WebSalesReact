import React from "react";

class TextBoxWithLabel extends React.Component {
  render() {
    return (
      <div className={this.props.divclasses}>
        <label htmlFor={this.props.fieldname}>{this.props.labelname}</label>
        <br />

        <input
          className={this.props.inputclasses}
          id={this.props.fieldname}
          maxLength={this.props.maxlength}
          name={this.props.fieldname}
          placeholder={this.props.PlaceHolder}
          type="text"
        />
        <br />
        <span
          className="field-validation-valid"
          data-valmsg-for={this.props.fieldname}
          data-valmsg-replace="true"
        />
      </div>
    );
  }
}

module.exports = TextBoxWithLabel;
