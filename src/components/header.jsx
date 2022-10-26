import React from "react";
import { Link } from "react-router-dom";
import headerimg from "../images/header.jpg";

const Header = () => {
  return (
    <main className="myheader">
      <div className="px-4 py-5 text-center">
        <h1 className="display-5 fw-bold">Find & Hire Employees, Sooner.</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            From advertising jobs to making offers, get everything you need to
            attract and hire better employees — in less time.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/signup">
              <button
                type="button"
                className="btn btn-primary rounded-pill my-btn btn-lg px-4 gap-3 mb-5"
              >
                Get Started
              </button>
            </Link>
          </div>
          <div className="container px-5">
            <ul>
              <li className="feat">
                <i className="fa fa-check" aria-hidden="true"></i> Full Feature
                14-Days Trial
              </li>
              <li className="feat">
                <i className="fa fa-check" aria-hidden="true"></i> No Credit
                Card Needed
              </li>
            </ul>
          </div>
          <div className="container px-5">
            <img
              src={headerimg}
              className="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Example image"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
