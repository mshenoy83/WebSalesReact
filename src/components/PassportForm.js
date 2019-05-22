import React from "react";
import Footer from "../common/footer.js";
import Header from "../common/header.js";
import TextBoxWithLabel from "../common/textboxwithlabel.js";
import Dropdown from "../common/dropdown.js";

class PassportForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header Title="Add Your Drivers License" />
        <table>
          <tbody>
            <tr>
              <td className="label-for">
                <TextBoxWithLabel
                  divclasses="cust-dtl-cell-2 x1 validation-tag validation-tag-error"
                  labelname="Passport Number"
                  fieldname="passportnumber"
                  PlaceHolder="e.g M12345678"
                  inputclasses="k-textbox"
                />
              </td>
            </tr>
            <tr>
              <td>
                <Footer />
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

module.exports = PassportForm;
