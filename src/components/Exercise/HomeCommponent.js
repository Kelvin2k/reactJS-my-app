import React, { Component } from "react";

export default class HomeCommponent extends Component {
  render() {
    //caution: when return layout, don't return 2 same-level div, cause in nature html tags which are being ussed are jsx tags, and they are object in nature, ssso do not return 2 object
    console.log(<div></div>);
    return <div className="bg-dark text-white">Home Commponent</div>;
  }
}
