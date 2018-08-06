import React from "react";
import Page6 from "./Page6";

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default {
  path: "/",
  component: App,
  indexRoute: { component: Page6 },
  childRoutes: [
    {
      path: "/home",
      name: "/home",
      component: Page6
    },
    {
      path: "*",
      name: "notfound",
      component: Page6
    }
  ]
};
