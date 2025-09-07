import React, { Component } from "react";
import DemoChild from "./DemoChild";

export default class DemoProps extends Component {
  state = {
    studentName: "Quang Trung",
  };

  updateStudentName = () => {
    //SetState to update data
    this.setState({
      studentName: "Nguyen Hue",
    });
  };

  render() {
    const name = "Michael";
    const studentCode = 345;
    return (
      <div>
        <h2>Demo about Props in react</h2>
        <DemoChild
          updateStudentName={this.updateStudentName}
          studentName={this.state.studentName}
          name={name}
          studentCode={studentCode}
        />
      </div>
    );
  }
}
