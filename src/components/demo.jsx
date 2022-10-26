import React from "react";
import DemoCard from "./common/demoCard";
import DemoContent from "./demoContent";
const Demo = () => {
  return (
    <main className="mymain">
      <div className="container p-5">
        <div className="row">
          <div className="col-md-5 col-12 order-2 order-lg-1">
            <DemoCard />
          </div>
          <div className="col-md-7 col-12 order-1 order-lg-2">
            <DemoContent />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Demo;
