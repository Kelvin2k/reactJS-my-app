
import React, { Component } from 'react'

export default class DemoChild extends Component {
  render() {
    //props
    // props is an attribute in ract help child component recieve data that passed from parent component 
    console.log(this.props)
    const {name,studentName, updateStudentName} = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{studentName}</p>
        <button onClick={
            updateStudentName
        } className="btn btn-dark">Update name</button>
      </div>
    )
  }
}

