import React, { Component } from "react";

export default class DemoEvent extends Component {
  render() {
    const showInputData = (event) => {
      console.log(event.target.value);
    };
    const showAlert = (string) => {
      alert(string);
    };
    return (
      <div>
        <h2>Demo about events in react</h2>
        <button
          // onClick={() => {
          //   alert("Nothing happen");
          // }}
          // when calling function that need parameters, we will has an anonymmous function cover outside
          //test
          onClick={() => {
            showAlert("I wanna say");
          }}  
          className="btn btn-success"
        >
          Click on me!
        </button>
        {/* onChange  */}
        <input
          type="text"
          placeholder="Please insert name"
          className="form-control"
          // onChange={(event) => {
          //   console.log("event", event.target.value);
          // }}
          onChange={(event) => {
            showInputData(event);
          }}
        />
      </div>
    );
  }
}
