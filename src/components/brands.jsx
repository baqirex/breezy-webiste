import React from "react";
import m1 from "../images/m1.png";
import m2 from "../images/m2.png";
import m3 from "../images/m3.png";
import m4 from "../images/m4.png";
import m5 from "../images/m5.png";
import m6 from "../images/m6.png";
import m7 from "../images/m7.png";

const Brands = () => {
  return (
    <main className="mymain">
      <div className="container">
        <ul>
          <li className="b">
            <img src={m1} height="100px" />
          </li>
          <li className="b">
            <img src={m2} height="100px" />
          </li>
          <li className="b">
            <img src={m3} height="100px" />
          </li>
          <li className="b">
            <img src={m4} height="100px" />
          </li>
          <li className="b">
            <img src={m5} height="100px" />
          </li>
          <li className="b">
            <img src={m6} height="100px" />
          </li>
          <li className="b">
            <img src={m7} height="100px" />
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Brands;
