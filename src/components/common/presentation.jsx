import React from "react";

const Presentation = ({ title, color, heading, description, image }) => {
  return (
    <div className="presentation">
      <div className="p-head">
        <h1 className="p-title" style={(color = { color })}>
          {title}
        </h1>
        <h1 className="p-heading">{heading}</h1>
        <p className="p-description">{description}</p>
      </div>
      <div className="p-img">
        <img src={image} />
      </div>
    </div>
  );
};

export default Presentation;
