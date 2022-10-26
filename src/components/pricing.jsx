import React from "react";
import PricingHead from "./common/pricingHead";
import Navbar from "./navbar";
import OverviewTable from "./tables/overviewTable";

const Pricing = () => {
  return (
    <div className="container-fluid pricing">
      <Navbar />
      <PricingHead />
      <OverviewTable />
    </div>
  );
};

export default Pricing;
