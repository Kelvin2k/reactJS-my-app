import React, { Component, PureComponent } from "react";

export default class Footer extends PureComponent {
  componentDidMount() {
    //count down
    let timmer = 10;
    this.countDown = setInterval(() => {
      console.log(timmer--);
    }, 1000);
    // 1000  milliseconds
  }
  render() {
    console.log("footer render");
    return <div className="p-5 bg-warning">Footer</div>;
  }
  componentWillUnmount() {
    console.log("will unmount");
    // clear function count down
    clearInterval(this.countDown)
  }
}
