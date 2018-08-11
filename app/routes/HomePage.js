/**
 *
 * HomePage
 *
 */

import React, { Component } from "react";

class HomePage extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <div />

        <div style={{ color: "#6b6161" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "100px",
              alignItems: "center",
              backgroundColor: "#fcecd7",
              borderRadius: "4px"
            }}
          >
            <span>Hello Colorful World 😊</span>
          </div>
        </div>

      </div>
    ); // eslint-disable-line
  }
}

export default HomePage;
