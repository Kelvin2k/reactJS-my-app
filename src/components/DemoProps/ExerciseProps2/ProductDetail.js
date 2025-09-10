import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    const { name, screen, os, frontCamera, rearCamera, ram, rom, image } =
      this.props.phone;
    console.log("name", name);
    return (
      <div className="flex items-center">
        <div className="w-4/12">
          <img src={image} alt="" />
        </div>
        <div className="w-8/12 space-y-5">
          <h3 className="font-bold text-3xl">{os}</h3>
          <div className="grid grid-cols-2 text-xl">
            <p className="font-bold">Screen:</p>
            <p>{screen}</p>
          </div>
          <div className="grid grid-cols-2 text-xl">
            <p className="font-bold">Operating system:</p>
            <p>{os}</p>
          </div>
          <div className="grid grid-cols-2 text-xl">
            <p className="font-bold">Front camera:</p>
            <p>{frontCamera}</p>
          </div>
          <div className="grid grid-cols-2 text-xl">
            <p className="font-bold">Rear camera:</p>
            <p>{rearCamera}</p>
          </div>
          <div className="grid grid-cols-2 text-xl">
            <p className="font-bold">RAM:</p>
            <p>{ram}</p>
          </div>
          <div className="grid grid-cols-2 text-xl">
            <p className="font-bold">ROM:</p>
            <p>{rom}</p>
          </div>
        </div>
      </div>
    );
  }
}
