import React, { Component } from "react";
import Choice from "./Choice";
import Result from "./Result";
import "./DiceGame.scss"

export default class DiceGame extends Component {
  render() {
    return (
      <div className="bg_DiceGame">
        <div className="container">
          <h1 className="text-6xl mb-3">Chinese Dice Game</h1>
          {/* contain button Over-under betting button  */}
          <Choice />
          {/* result game, win counter, total games  */}
          <Result />
          {/* when click on button, dice the roll and see user win or lose  */}
          <button className="text-white py-2 px-5 bg-green-600 rounded-md hover:bg-green-700 duration-500 mt-5">Play game!</button>
        </div>
      </div>
    );
  }
}
