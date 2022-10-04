import React from "react";
import headerimg from "../images/header.jpg";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="heading">Find & Hire Employees, sooner.</h1>

      <p className="h-description">
        From advertising jobs to making offers, get everything you need to
        attract and hire better employees — in less time.
      </p>
      <button className="btn btn-primary btn-lg m-3 sft">
        Start my free trial
      </button>

      <ul>
        <li className="feat">
          <i className="fa fa-check" aria-hidden="true"></i> Full Feature
          14-Days Trial
        </li>
        <li className="feat">
          <i className="fa fa-check" aria-hidden="true"></i> No Credit Card
          Needed
        </li>
      </ul>

      <img className="headerimg" src={headerimg} width="500px" />
    </div>
  );
};

export default Header;
