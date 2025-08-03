import React, { Component } from "react";

export default class HeaderComponent extends Component {
  render() {
    const name = "Michael";
    const age = 18;
    const arrNumber = [3, 5, 7];
    // Data binding allows us to dynamically display values from variables in the UI.
    // This includes primitive types (strings, numbers), arrays, objects, or even JSX elements.
    // It's a core concept in React that keeps the UI in sync with the component's state or props.
    return (
      <div className="text-white bg-primary text-center">
        {name} this year {age}
        <p>Odd number include {arrNumber} </p>
      </div>
    );
  }
}
