import React from "react";
import logo from "..//images/logo.png";
import CompanyList from "./common/companylist";
import ProductList from "./common/productlist";
import ResourcesList from "./common/resourceslist";
import SupportList from "./common/supportlist";

const Footer = () => {
  return (
    <main className="f-main">
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 border-top">
          <div className="col mb-3">
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <img src={logo} height="20px" />
            </a>
            <div className="address">
              <p>1534 Oak St #301, Jacksonville, FL 32204</p>
            </div>
            <p className="text-muted">&copy; 2022 Breezy HR, inc.</p>
          </div>

          <div className="list-container">
            <ProductList />
            <ResourcesList />
            <SupportList />
            <CompanyList />
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Footer;
