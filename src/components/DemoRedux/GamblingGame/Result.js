import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
  render() {
    const {winCounter, youSelect, totalMatches} = this.props
    return (
      <div>
        <p>You select: <span className='text-red-500'>{youSelect ? "Big" : "Small"}</span></p>
        <p>Win counter: <span className='text-blue-500'>{winCounter}</span></p>
        <p>Total matches: <span className='text-yellow-500'>{totalMatches}</span></p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    winCounter: state.diceGame.winCounter,
    youSelect: state.diceGame.youSelect,
    totalMatches: state.diceGame.totalMatches
  }
}


export default connect(mapStateToProps)(Result)
