import React, { Component } from "react";
import { connect } from "react-redux";

export class DemoRedux extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="space-y-3 container mx-auto">
        <h2>Demo on getting data process and change in Redux</h2>
        <p>{this.props.name}</p>
        <button onClick={() => {
            this.props.changeName("Laura")
        }} className="bg-green-500 py-2 px-4 rounded-md text-white">
          Change name to John
        </button>
      </div>
    );
  }
}

// Function help take data from store to component
const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};

// Function helps create dispatch method to upload data on store
const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => {
      dispatch({
        // type helps format dispatch giving signal
        type: "CHANGE_NAME",
        //payload is data sending to store to be stored
        payload: name,
      });
    },
  };
};

// Connect between coponent and store redux
export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux);
