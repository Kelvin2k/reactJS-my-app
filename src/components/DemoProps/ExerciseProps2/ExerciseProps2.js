import React, { Component } from "react";
import Product from "./Product";
import ProductDetail from "./ProductDetail";

export default class ExerciseProps2 extends Component {
  // Steps to do with exercise
  // 1. Passing props into component product and render data onto this component
  // 2. Passing data state into component ProductDetail
  // 3. Create a function to handle the process when the user clicks the "Detail" button in the Product component. This function will update the state with the data of the clicked phone.
  state = {
    phone: {
      id: 1,
      name: "VinSmart Live",
      screen: "AMOLED, 6.2, Full HD+",
      os: "Android 9.0 (Pie)",
      frontCamera: "20 MP",
      rearCamera: "Main 48 MP & Sub 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      price: 5700000,
      image: "./img/vsphone.jpg",
    },
  };
  arrPhone = [
    {
      id: 1,
      name: "VinSmart Live",
      screen: "AMOLED, 6.2, Full HD+",
      os: "Android 9.0 (Pie)",
      frontCamera: "20 MP",
      rearCamera: "Main 48 MP & Sub 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      price: 5700000,
      image: "./img/vsphone.jpg",
    },
    {
      id: 2,
      name: "Meizu 16Xs",
      screen: "AMOLED, FHD+ 2232 x 1080 pixels",
      os: "Android 9.0 (Pie); Flyme",
      frontCamera: "20 MP",
      rearCamera: "Main 48 MP & Sub 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      price: 7600000,
      image: "./img/meizuphone.jpg",
    },
    {
      id: 3,
      name: "Iphone XS Max",
      screen: "OLED, 6.5, 1242 x 2688 Pixels",
      os: "iOS 12",
      rearCamera: "Main 12 MP & Sub 12 MP",
      frontCamera: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      price: 27000000,
      image: "./img/applephone.jpg",
    },
  ];
  handleShowDetail = (phone) => {
    this.setState({ phone: phone });
  };
  render() {
    return (
      <div>
        <h2>Exercise Props 2</h2>
        <div className="container">
          {/* product list  */}
          <div className="grid grid-cols-3">
            {this.arrPhone.map((item, index) => {
              return (
                <Product
                  key={item.id}
                  phone={item}
                  onShowDetail={this.handleShowDetail}
                />
              );
            })}
          </div>
          <div>
            <ProductDetail key={this.state.phone.id} phone={this.state.phone} />
          </div>
        </div>
      </div>
    );
  }
}
