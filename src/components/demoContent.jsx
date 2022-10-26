import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const DemoContent = () => {
  return (
    <div className="container demo">
      <div className="row">
        <div className="col">
          <div className="demo-content">
            <Link to="/">
              <img src={logo} height="40px" />
            </Link>
            <h1 className="demo-heading">Schedule Your Free Demo</h1>

            <p className="demo-description">
              Demos are a great, fast way to learn about Breezy. Tell us a
              little about yourself so we can get you scheduled.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoContent;
