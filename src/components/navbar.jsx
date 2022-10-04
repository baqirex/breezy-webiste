import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="nav-bar">
        <div className="logo-img">
          <img src={logo} height="25px" />
        </div>
        <div className="mt-3">
          <ul>
            <li>
              <a className="cool-link" href="">
                Product <i className="fa fa-angle-down" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a className="cool-link" href="">
                Resources{" "}
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a className="cool-link" href="">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-right mt-1">
          <ul>
            <li>
              <a className="cool-link" href="">
                Sign In
              </a>
            </li>
            <li>
              <a className="cool-link" href="">
                Demo
              </a>
            </li>
            <li>
              <div class="input-group mt-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your company email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-primary "
                  type="button"
                  id="button-addon2"
                >
                  Button
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
