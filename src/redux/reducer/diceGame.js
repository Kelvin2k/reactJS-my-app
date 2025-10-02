const initialState = {
  youSelect: true,
  winCounter: 0,
  totalMatches: 0,
  listDice: [{ dice: 1 }, { dice: 5 }, { dice: 3 }],
};

//default Parameter
export const diceGame = (state = initialState, action) => {
  // Check which action is being dispatched by its type. If the action is dispatched to update the value of Big or Small, then update the state accordingly.
  // switch case condition structure
  // check in switch case if type = type of play game event, check will be deployed: change dice (random), calculate num of dice number (> 10 Big , <= 10 Small), check whether user win or logRoles, if win +1 into win CountQueuingStrategy, +1 total matches
  switch (action.type) {
    case "SELECT_BIG_OR_SMALL": {
      // update you select on state
      // action.payLoad = true || false
      // When changing value of state, redux does not know state is changing or not so when change we need to clone current state first, then we make change on clone of sate and return that clone state
      const newState = { ...state };
      newState.youSelect = action.payLoad;
      return newState;
    }
    case "START_GAME": {
      const newState = { ...state };
      newState.listDice = action.payload;
      console.log(newState.listDice);
      let totalDice = 0;
      // run loop through listDice in newState
      for (let item of newState.listDice) {
        totalDice += item.dice;
      }
      console.log(totalDice);
      // check if user select the right option or not
      if (totalDice > 10) {
        if (newState.youSelect) {
          newState.winCounter++;
        }
      } else {
        if (!newState.youSelect) {
          newState.winCounter++;
        }
      }
      // totalMatches added 1 more value
      newState.totalMatches++;

      return newState;
    }
    default: {
      return state;
    }
  }
};
