import React from "react";
import Input from "./utils/input";
import logo from "../images/logo.png";
import google from "../images/google.png";
import linkedin from "../images/linkedin.png";
import windows from "../images/windows.png";
import cloud from "../images/cloud-running.png";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <main className="mymain">
      <div className="container signin p-5">
        <div className="row">
          <div className="col-md-5 col-12 order-2 order-lg-1">
            <div>
              <Link to="/">
                <img src={logo} height="40px" />
              </Link>
              <div className="icon-sign">
                <ul>
                  <li className="signin-icons">
                    <img src={google} />
                    <img src={linkedin} />
                    <img src={windows} height="35px" />
                  </li>
                </ul>
              </div>
              <p className="mt-4">Or use your email account</p>
            </div>
            <div className="signin-card">
              <form>
                <Input title="Company Email Address*" type="email" />
                <Input title="Password*" type="password" />
                <div className="d-flex flex-column">
                  <div>
                    <a className="text-muted m-3">Forgot your password</a>
                  </div>
                  <div>
                    <button className="btn btn-primary m-3 rounded-pill my-btn">
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-7 col-12 order-1 order-lg-2">
            <div className="d-flex">
              <div className="signin-content">
                <h1>Don't have an account ?</h1>
                <Link to="/signup">
                  <button className="btn btn-outline-dark rounded-pill signin-btn">
                    Sign up for free
                  </button>
                </Link>
              </div>
              <div className="cloud">
                <img src={cloud} height="200px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signin;
