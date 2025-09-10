import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { name, image } = this.props.phone;
    const phone = this.props.phone;
    const showDetail = this.props.onShowDetail;

    return (
      <div className="p-4">
        <img src={image} alt="" className="w-48 h-60 object-contain mx-auto" />
        <h3 className="font-bold text-2xl">{name}</h3>
        <button
          className="bg-yellow-500 px-5 py-2 text-white rounded-lg hover:bg-yellow-600 duration-500"
          onClick={() => showDetail(phone)}
        >
          Details
        </button>
      </div>
    );
  }
}
