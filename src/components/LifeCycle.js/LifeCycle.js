import axios from "axios";
import React, { Component } from "react";
import Footer from "./Footer";

export default class LifeCycle extends Component {
  state = { number: 1 };
  componentDidMount() {
    // only run once only after the first render ~ use to ccall API when user load page
    // axios method get
    axios({
      url: "https://tiki.vn/api/shopping/v2/featured_keywords?page_name=Category&category_id=1934",
      method: "GET",
    })
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("did mount");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h2>LifeCycle</h2>
        <button
          onClick={() => {
            this.setState({ number: this.state.number - 1 });
          }}
          className="btn btn-dark"
        >
          -
        </button>
        <strong className="mx-5">{this.state.number}</strong>
        <button
          onClick={() => {
            this.setState({ number: this.state.number + 1 });
          }}
          className="btn btn-danger"
        >
          +
        </button>
        {this.state.number < 5 && <Footer />}
        {/* <Footer /> */}
      </div>
    );
  }
  componentDidUpdate() {
    console.log("did update");
    // automatically run when render run (updating)
  }
}
