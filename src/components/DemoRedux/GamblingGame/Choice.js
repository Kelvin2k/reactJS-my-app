import React, { Component } from 'react'
import Dice from './Dice'
export default class Choice extends Component {
  render() {
    const styleButton = 'bg-purple-600 p-10 rounded-md text-5xl border-4 border-green-500 text-white'
    return (
      <div className='flex justify-between'>
        <button className={styleButton}>Big</button>
        <Dice />
        <button className={styleButton}>Small</button>
      </div>
    )
  }
}
