import React from "react";
import Card from "./common/card";
import card1 from "../images/card1.png";
import card2 from "../images/card2.png";

const Testimonial = () => {
  return (
    <div className="test">
      <div className="test-c">
        <h3>Testimonial</h3>
        <h1>Our Customers Love Us!</h1>
        <p>Find out what they have to say about Breezy.</p>
      </div>
      <div className="card-c">
        <Card
          logo={card1}
          description="I find myself pitching Breezy to all sorts of companies… it really helps automate the boring and tedious parts of your HR and talent acquisition management process."
          name="Gianluca Binelli"
        />
        <Card
          logo={card2}
          description="Breezy is a simple tool that does everything we need. And that's a rare piece of software."
          name="Rob Collie"
        />
      </div>
    </div>
  );
};

export default Testimonial;
