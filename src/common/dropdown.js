import React from "react";

class Dropdown extends React.Component {
  render() {
    return (
      <div className="cust-dtl-cell-2 x1 validation-tag validation-tag-error">
        <label>State Issued</label>
        <br />
        <div id="customSelect">
          <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut" />
            <option value="mango">Mango</option>
          </select>
        </div>
      </div>
    );
  }
}

module.exports = Dropdown;
