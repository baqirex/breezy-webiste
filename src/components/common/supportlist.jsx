import React, { Component } from "react";
import List from "./list";

class SupportList extends Component {
  state = { list: ["Help Center", "Developer API", "Breezy Status"] };
  render() {
    return <List heading="Support" list={this.state.list} />;
  }
}

export default SupportList;
