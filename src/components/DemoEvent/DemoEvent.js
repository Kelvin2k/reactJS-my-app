import React, { Component } from "react";

export default class DemoEvent extends Component {
  render() {
    const showInputData = (event) => {
      console.log("event", event.target.value);
    };
    const showNotice = (string) => {
      alert(string);
    };
    return (
      <div>
        <h2>Demo about events in React</h2>
        <button
          //   onClick={() => {
          //     alert("Nothing happens!");
          //   }}
          // when calling function that need passing parameter, we will have a anonymous function cover it
          onClick={() => {
            showNotice("I wanna say");
          }}
          className="btn btn-success"
        >
          Click on me
        </button>
        {/* onChange  */}
        <input
          type="text"
          placeholder="Please input your name"
          className="form-control"
          onChange={(event) => {
            showInputData(event);
          }}
        />
      </div>
    );
  }
}
