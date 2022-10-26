import React from "react";

import c1 from "../images/images.png";
import c2 from "../images/c2.png";
import c3 from "../images/c3.png";
import c4 from "../images/c4.png";
import c5 from "../images/c5.png";

const Customers = () => {
  return (
    <div className="container p-2">
      <div className="about-customers">
        <h3>You're in Good Company</h3>
        <div className="c-images">
          <ul>
            <li className="c-image">
              <img src={c1} />
            </li>
            <li className="c-image">
              <img src={c2} height="30px" />
            </li>
            <li className="c-image">
              <img src={c3} height="30px" />
            </li>
            <li className="c-image">
              <img src={c4} height="30px" />
            </li>
            <li className="c-image">
              <img src={c5} height="80px" />
            </li>
          </ul>
        </div>
        <p>
          Our customers love us, and it shows! According to Gartner we're the
          most highly rated HR and Applicant Tracking product in Customer
          Satisfaction.
        </p>
      </div>
    </div>
  );
};

export default Customers;
