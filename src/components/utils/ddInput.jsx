import React from "react";

const DDinput = ({ label }) => {
  return (
    <div className="form-group col-8 m-3">
      <label>{label}</label>
      <select className="form-select">
        <option></option>
        <option>1 - 25</option>
        <option>26 - 100</option>
        <option>101 - 500</option>
        <option>501 - 1000</option>
        <option>More than 1000</option>
      </select>
    </div>
  );
};

export default DDinput;
