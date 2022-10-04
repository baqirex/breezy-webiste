import React from "react";
import logo from "..//images/logo.png";
import CompanyList from "./common/companylist";
import ProductList from "./common/productlist";
import ResourcesList from "./common/resourceslist";
import SupportList from "./common/supportlist";

const Footer = () => {
  return (
    <div>
      <div className="myfooter">
        <div className="f-logo">
          <img src={logo} height="40px" />
          <p>1534 Oak St #301, Jacksonville, FL 32204</p>
          <ul className="social">
            <li>
              <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
            </li>
            <li>
              <i
                className="fa fa-facebook-official fa-2x"
                aria-hidden="true"
              ></i>
            </li>
            <li>
              <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
            </li>
          </ul>
          <p>
            © 2022 Breezy HR, Inc. <br /> More PeopleFluent Talent Solutions
          </p>
          <p className="cc">Part of Learning Technologies Group plc LTG</p>
        </div>
        <div className="list-container">
          <ProductList />
          <ResourcesList />
          <CompanyList />
          <SupportList />
        </div>
      </div>
      <div className="cc-list">
        <ul>
          <li>
            <a className="cool-link">Security</a>
          </li>
          <li>
            <a className="cool-link">Corporate Responsibility</a>
          </li>
          <li>
            <a className="cool-link">Disclosures</a>
          </li>
          <li>
            <a className="cool-link">Terms of Service</a>
          </li>
          <li>
            <a className="cool-link">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
