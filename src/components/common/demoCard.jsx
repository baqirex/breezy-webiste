import React from "react";
import Input from "../utils/input";
import DDinput from "./../utils/ddInput";
import DDQinput from "./../utils/ddqinput";

const DemoCard = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="demo-card">
          <form>
            <Input title="Full Name*" type="text" />
            <Input title="Company*" type="text" />
            <Input title="Company Email Address*" type="email" />
            <Input title="Company Website*" type="email" />
            <DDinput label="Number of Employees*" />
            <DDinput label="Hiring Estimate*" />
            <DDQinput label="How did you hear about us*" />
            <button className="btn btn-primary rounded-pill m-3 my-btn">
              Start Your Free Demo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;
