import React from "react";
import SignupCard from "./common/signupCard";
import SignupContent from "./signupContent";

const Signup = () => {
  return (
    <main className="mymain">
      <div className="container p-5">
        <div className="row">
          <div className="col-md-5 col-12 order-2 order-lg-1">
            <SignupCard />
          </div>
          <div className="col-md-7 col-12 order-1 order-lg-2">
            <SignupContent />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
