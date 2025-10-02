import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dice extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='flex space-x-3 bg-white h-20'>
        {/* <img className='h-20' src={"./img/Dice/1.png"} alt="" />
        <img className='h-20' src={"./img/Dice/3.png"} alt="" />
        <img className='h-20' src={"./img/Dice/6.png"} alt="" /> */}
        {this.props.diceList.map((item, index) => {
          return <img key={index} className='h-20' src={`./img/Dice/${item.dice}.png`} alt="" />;
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    diceList: state.diceGame.listDice
  }
}

export default connect(mapStateToProps)(Dice)