import React, { Component } from "react";

export default class HeaderComponent extends Component {
  render() {
    const name = "Dong Tran";
    const age = 18;
    const arrNumbmer = [3, 5, 7];
    const arrJSX = [<div>Hello</div>, <p>Lohe</p>];
    const arrStudent = [
      {
        name: "Name",
        age: 13,
      },
    ];
    // binding data helps putting value inside of variable render on screen faster
    // binding data allowsss us to render on sscreen: String,Number,Array,JSX
    // react can not display object data on screen excepts JSX
    return (
      <div className="demo">
        {name} this year {age}
        <p>Odd number include {arrNumbmer}</p>
        <p>{arrJSX}</p>
      </div>
    );
  }
}
