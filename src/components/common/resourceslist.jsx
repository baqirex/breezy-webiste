import React, { Component } from "react";
import List from "./list";

class ResourcesList extends Component {
  state = { list: ["Blogs", "E-Books", "HR Resources"] };
  render() {
    return <List heading="Resources" list={this.state.list} />;
  }
}

export default ResourcesList;
