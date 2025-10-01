import React, { Component } from 'react'
import Dice1 from './../../../assets/GamblingGame/img/1.png'
import Dice2 from './../../../assets/GamblingGame/img/2.png'
import Dice3 from './../../../assets/GamblingGame/img/3.png'
import Dice4 from './../../../assets/GamblingGame/img/4.png'
import Dice5 from './../../../assets/GamblingGame/img/5.png'
import Dice6 from './../../../assets/GamblingGame/img/6.png'



export default class Dice extends Component {
  render() {
    return (
      <div className='flex space-x-3 bg-white h-20'>
        <img className='h-20' src={Dice1} alt="" />
        <img className='h-20' src={Dice1} alt="" />
        <img className='h-20' src={Dice1} alt="" />
      </div>
    )
  }
}
