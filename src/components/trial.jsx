import React from "react";
import { Link } from "react-router-dom";

const Trial = () => {
  return (
    <main className="myheader">
      <div className="px-4 py-5 text-center">
        <div className=" aru">
          <p className="lead">Are you ready ?</p>
        </div>
        <h1 className="display-5 fw-bold">
          Start optimizing your recruiting process today.
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Join the thousands of companies already hiring with Breezy HR.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/signup">
              <button
                type="button"
                className="btn btn-primary rounded-pill my-btn btn-lg px-4 gap-3 mb-5"
              >
                Start my free trial
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
        </div>
      </div>
    </main>
  );
};

export default Trial;
