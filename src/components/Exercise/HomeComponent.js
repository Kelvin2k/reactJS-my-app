import React, { Component } from "react";

export default class HomeComponent extends Component {
  render() {
    // caution: when returning layouts, keep in mind not returning 2 div that have same level because html tags are jsx tags and in nature they are object, so it can not return 2 objects
    console.log(<div></div>);
    return (
      <div className="text-success fs-5 fw-bold bg-dark">Home Componentsssssss</div>
    );
  }
}
