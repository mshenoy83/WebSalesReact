import React from "react";
import Header from "../common/header.js";
import TextBoxWithLabel from "../common/textboxwithlabel.js";
import medicareImage from "../content/images/medicareCard.png";
import Footer from "../common/footer.js";

class MedicareForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header Title="Add Your Medicare Card" />
        <table>
          <tbody>
            <tr>
              <td className="label-for">
                <TextBoxWithLabel
                  divclasses="cust-dtl-cell-2 x1 validation-tag validation-tag-error"
                  labelname="Medicare Number (1)"
                  fieldname="medicarenumber"
                  inputclasses="k-textbox"
                />
              </td>
            </tr>
            <tr>
              <td className="label-for">
                <TextBoxWithLabel
                  divclasses="cust-dtl-cell-2 x1 validation-tag validation-tag-error"
                  labelname="Reference Number (2)"
                  fieldname="referencenumber"
                  inputclasses="k-textbox"
                />
              </td>
            </tr>
            <tr>
              <td className="label-for">
                <TextBoxWithLabel
                  divclasses="cust-dtl-cell-2 x1 validation-tag validation-tag-error"
                  labelname="Valid until (3)"
                  fieldname="validuntil"
                  inputclasses="k-textbox"
                />
              </td>
            </tr>
            <tr>
              <td>
                <br />
                <img
                  className="medicare"
                  src={medicareImage}
                  alt="Medicare Card"
                />
                <br />
              </td>
            </tr>
          </tbody>
        </table>
        <Footer />
      </React.Fragment>
    );
  }
}

module.exports = MedicareForm;
