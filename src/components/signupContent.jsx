import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import signup1 from "../images/signup1.png";

const SignupContent = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="signup-content">
            <Link to="/">
              <img src={logo} height="40px" />
            </Link>
            <h1 className="signup-heading">Sign up for Breezy HR</h1>

            <ul>
              <li className="feat signup-feat">
                <i className="fa fa-check" aria-hidden="true"></i> Full Feature
                14-Days Trial
              </li>
              <li className="feat signup-feat">
                <i className="fa fa-check" aria-hidden="true"></i> No Credit
                Card Needed
              </li>
            </ul>
            <p className="signup-description">
              Breezy’s applicant tracking system gives your team everything it
              needs to advertise jobs, attract talent & make better hiring
              decisions in less time. Ditch your outdated ATS, upgrade your
              hiring.
            </p>
            <div className="signup-footer">
              <img src={signup1} height="150px" />
              <div className="m-4">
                <h1>Have an account ?</h1>
                <Link to="/signin">
                  <button className="btn btn-outline-dark rounded-pill signin-btn">
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupContent;
