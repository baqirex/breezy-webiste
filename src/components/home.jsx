import React from "react";
import Main from "./main";
import Company from "./company";
import Posts from "./posts";
import Customers from "./customers";
import Testimonial from "./testimonial";
import Brands from "./brands";
import Trial from "./trial";
import Footer from "./footer";
import Presentations from "./presentations";

const Home = () => {
  return (
    <>
      <Main />
      <Presentations />
      <Company />
      <Posts />
      <Customers />
      <Testimonial />
      <Brands />
      <Trial />
      <Footer />
    </>
  );
};

export default Home;
