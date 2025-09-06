import React, { Component } from "react";

export default class BindingExercise extends Component {
  render() {
    const student = {
      name: "SangChicken",
      age: 29,
      yearBorn: 1993,
      mathScore: 3,
      physicScore: 4,
      bioScore: 1,
      totalScore: function () {
        return this.mathScore + this.physicScore + this.bioScore;
      },
    };
    const averageScore =
      (student.mathScore + student.physicScore + student.bioScore) / 3;

    return (
      <div>
        {/* name  */}
        <p>My name is {student.name}</p>
        {/* age  */}
        <p>{student.age}</p>
        {/* year born  */}
        <p>{student.yearBorn}</p>
        {/* average score  */}
        <p>total score for three subjects is: {student.totalScore()}</p>
        <p>average score for three subjects is: {averageScore}</p>
        <p>
          total score for three subjects is:
          {student.mathScore + student.bioScore + student.physicScore}
        </p>
        {/* Can pass ternary operator to bind on screen  */}
        <p>{averageScore >= 5 ? "good student" : "bad student"}</p>
      </div>
    );
  }
}
