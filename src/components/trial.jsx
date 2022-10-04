import React from "react";

const Trial = () => {
  return (
    <div className="trail">
      <p>Are you ready?</p>
      <h1 className="trial-h">
        Start optimizing your recruiting process today.
      </h1>

      <p className="h-description">
        Join the thousands of companies already hiring with Breezy HR.
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
    </div>
  );
};

export default Trial;
