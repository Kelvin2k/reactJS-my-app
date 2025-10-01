const initialState = {
  youSelect: true,
  winCounter: 0,
  totalMatches: 0,
  listDice: [
    { dice1: 1 },
    { dice2: 2 },
    { dice3: 3 },
  ],
};

//default Parameter
export const diceGame = (state = initialState, action) => {
    return state;
};