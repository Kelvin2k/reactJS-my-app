// better approach
// import { createSlice } from "@reduxjs/toolkit";

// const nameSlice = createSlice({
//   name: "name",
//   initialState: "Michael",
//   reducers: {}
// });

// export const store = configureStore({
//   reducer: {
//     name: nameSlice.reducer
//   }
// });

// Create store holding data
import { configureStore } from "@reduxjs/toolkit";
import DiceGame from "../components/DemoRedux/GamblingGame/DiceGame";
import { diceGame, initialDiceGameState } from "./reducer/diceGame";

export const store = configureStore({
  reducer: {
    // demo about storing data in store
    name: (state, action) => {
      // catch signal dispatch sent from component
      console.log(action);
      if (action.type === "CHANGE_NAME") {
        return action.payload;
      }
      return "Michael";
    },
    // diceGame: DiceGame,
    diceGame,

  },
});
