import React, { Component } from "react";

export default class ExerciseBinding extends Component {
  render() {
    //
    const student = {
      name: "Michael",
      age: 29,
      yearBorn: 1993,
      mathScore: 3,
      physicScore: 4,
      chemistryScore: 1,
      averageScore: () => {
        return (student.mathScore + student.physicScore + student.chemistryScore) / 3;
      },
    };
    const averageScore =
      student.mathScore + student.mathScore + student.physicScore;
    return (
      <div>
        {/* {name} */}
        <p>My name is: {student.name}</p>
        {/* age  */}
        <p>{student.age}</p>
        {/* year born  */}
        <p>{student.yearBorn}</p>
        {/* average score  */}
        <p>Total score i achieve is: {student.averageScore()}</p>
        <p>
          {/* Ranking  */}
          {/* can pass a ternary operator to binding onto interface  */}
          {student.averageScore >= 5 ? "good student" : "bad student"}
        </p>
      </div>
    );
  }
}
