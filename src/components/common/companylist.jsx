import React, { Component } from "react";
import List from "./list";

class CompanyList extends Component {
  state = { list: ["About", "Contact Us", "Careers"] };
  render() {
    return <List heading="Company" list={this.state.list} />;
  }
}

export default CompanyList;
