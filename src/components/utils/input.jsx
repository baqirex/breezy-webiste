import React from "react";

const Input = ({ title, type, placeholder }) => {
  return (
    <div className="form-group col-8 m-3">
      <label>{title}</label>
      <input className="form-control" type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
