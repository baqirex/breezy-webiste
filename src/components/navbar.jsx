import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand" href="#">
          <img src={logo} height="25px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/product"
                className="nav-link"
                aria-current="page"
                href="#"
              >
                Product <i className="fa fa-angle-down" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resources" className="nav-link" href="#">
                Resources{" "}
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="nav-link" href="#">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link" href="#">
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/demo" className="nav-link" href="#">
                Demo
              </Link>
            </li>
          </ul>
          <form className="d-flex d-none d-lg-flex" role="sign in">
            <input
              className="form-control me-2 col-1"
              type="sign in"
              placeholder="Your company email"
              aria-label="Sign in"
            />
            <div className="col-6">
              <button className="btn btn-primary my-btn" type="submit">
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
