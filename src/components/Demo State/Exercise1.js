import React, { Component } from "react";

export default class Exercise1 extends Component {
  state = {
    carColor: "black",
  };
  render() {
    const arrButton = [
      {
        content: "Select red car",
        colorCode: "red",
      },
      {
        content: "Select black car",
        colorCode: "black",
      },
      {
        content: "Select silver car",
        colorCode: "silver",
      },
      {
        content: "Select gray car",
        colorCode: "gray",
      },
    ];
    return (
      <div className="container">
        <h2>Exercise demo state 1</h2>
        <div className="row">
          <div className="col-8">
            <img
              className="w-100"
              src={`./image/products/${this.state.carColor}-car.jpg`}
              alt=""
            />
          </div>
          <div className="col-4">
            {/* with the use of loop to create interface, we will implement map array  */}
            {/* Here returns a an array containing element could be jsx, string or number  */}
            {arrButton.map((item, index) => {
              return (
                <button
                  onClick={() => {
                    this.setState({
                        carColor: item.colorCode
                    });
                  }}
                  key={index}
                  className="btn btn-dark d-block mb-4"
                  style={{
                    backgroundColor: item.colorCode,
                  }}
                >
                  {item.content}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
