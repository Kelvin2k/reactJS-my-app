import React, { Component } from "react";
import Dice from "./Dice";
import { connect } from "react-redux";
class Choice extends Component {
  render() {
    const styleButton =
      "bg-purple-600 p-10 rounded-md text-5xl border-4 border-green-500 text-white";
    return (
      <div className="flex justify-between">
        <button
          className={styleButton}
          onClick={() => {
            this.props.changeYouSelect(true);
          }}
        >
          Big
        </button>
        <Dice />
        <button
          className={styleButton}
          onClick={() => {
            this.props.changeYouSelect(false);
          }}
        >
          Small
        </button>
      </div>
    );
  }
}



// Use mapdispatch to Props to create a function passing into 2 button help change the data
const mapDispatchToProps = (dispatch) => {
  return {
    //value could be true or false
    changeYouSelect: (value) => {
      const action = {
        type:"SELECT_BIG_OR_SMALL",
        payload: value
      }
      dispatch(action);
    },
  };
};

// Component need to connect with store
// mapStateToprops ===> take data from store
// mapDispatchToProps ==> create method send dispatch to store
// Reminder: with component do not use mapStateToProps but only use mapDispatchToProp need to pass 1 null value into connect function because if not, mapDispatchToProp will be int he position of mapStateToProps and lead to incorrect structure
export default connect(null, mapDispatchToProps)(Choice);

// On component will use props to get function and pass into onclick event for 2 button big and small
