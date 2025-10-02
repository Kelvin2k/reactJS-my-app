import React, { Component } from "react";
import Choice from "./Choice";
import Result from "./Result";
import "./DiceGame.scss";
import { connect } from "react-redux";
import { randomNumberInRange } from "../../../util/util";

class DiceGame extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="bg_DiceGame">
        <div className="container">
          <h1 className="text-6xl mb-3">Chinese Dice Game</h1>
          {/* contain button Over-under betting button  */}
          <Choice />
          {/* result game, win counter, total games  */}
          <Result />
          {/* when click on button, dice the roll and see user win or lose  */}
          <button
            className="text-white py-2 px-5 bg-green-600 rounded-md hover:bg-green-700 duration-500 mt-5"
            onClick={this.props.startGame}
          >
            Play game!
          </button>
        </div>
      </div>
    );
  }
}

// call mapDispatchToProp and create a method helps changing dices, check with that sum of dice, user win or lose with value of youChoose, if user win so +1 in win counter, +1 total mathes
const mapDispatchToProp = (dispatch) => {
  return {
    startGame: () => {
      // const dice1 = randomNumberInRange(6)
      // const dice2 = randomNumberInRange(6)
      // const dice3 = randomNumberInRange(6)
      // let newDiceList = [];
      // for (let i = 0 ; i < 3; i++){
      //   newDiceList.push({
      //     dice: randomNumberInRange(6)
      //   })
      // }

      // let newDiceList = Array.from({ length: 3 }, () => ({
      //   dice: randomNumberInRange(6),
      // }));
      
      let newDiceList = Array(3)
        .fill("")
        .map(() => {
          return {
            dice: randomNumberInRange(6),
          };
        });
      const action = {
        type: "START_GAME",
        payload: newDiceList,
      };
      dispatch(action);
    },
  };
};
// pass mapDIspatchToProp into connect to allow patching function to component to use

// connect component to store of redux
export default connect(null, mapDispatchToProp)(DiceGame);
