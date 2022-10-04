import React, { Component } from "react";

import List from "./list";

class ProductList extends Component {
  state = {
    list: [
      "Attract",
      "Qualify",
      "Hire",
      "Integrations",
      "Pricing",
      "Customers",
      "Partners",
    ],
  };
  render() {
    return <List heading="Product" list={this.state.list} />;
  }
}

export default ProductList;
