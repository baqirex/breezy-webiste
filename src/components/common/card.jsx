import React from "react";

const Card = ({ logo, description, name }) => {
  return (
    <div className="mcard">
      <img src={logo} height="55px" width="200px" />
      <p>"{description}"</p>
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
