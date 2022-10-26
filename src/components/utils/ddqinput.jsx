import React from "react";

const DDQinput = ({ label }) => {
  return (
    <div className="form-group col-8 m-3">
      <label>{label}</label>
      <select className="form-select">
        <option></option>
        <option>Search Engine</option>
        <option>Recommended by friend</option>
        <option>Social Media</option>
        <option>Blog</option>
        <option>Others</option>
      </select>
    </div>
  );
};

export default DDQinput;
