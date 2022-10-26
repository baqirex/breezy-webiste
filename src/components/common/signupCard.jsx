import React from "react";
import CheckBox from "../utils/checkBox";
import DDinput from "../utils/ddInput";
import Input from "../utils/input";

const SignupCard = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="signup-card">
          <form>
            <Input title="Full Name*" type="text" />
            <Input title="Company*" type="text" />
            <Input title="Company Email Address*" type="email" />
            <Input title="Company Website*" type="email" />
            <DDinput label="Number of Employees*" />
            <Input title="Password*" type="password" />
            <CheckBox />
            <button className="btn btn-primary rounded-pill m-3 my-btn">
              Start Your Free Trail
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupCard;
