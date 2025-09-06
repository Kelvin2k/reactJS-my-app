import React, { Component } from "react";
// import "./demoCss.css";

// attach file csss module
import style from "./demoCss.module.css";

// attach scss file into component
import "./demoCss.scss";

export default class DemoCss extends Component {
  render() {
    const inlineStyle = {
      color: "white",
      fontSize: "35px",
    };
    return (
      <div className="demo_css">
        <h2
          style={{
            color: "white",
            fontSize: "35px",
            backgroundColor: "blue",
          }}
        >
          Demo about Css in React
        </h2>
        <h2 style={inlineStyle}>Demo2 about Css in React</h2>
      </div>
    );
  }
}
