import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter";
import authenticationSlice from "./auth";

//#region normal method using Redux (without toolkit)
/*
const counterReducer = (state = initialCounterState, action) => {
  // note that you cannot mutate state, so clone it
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  } else if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  } else if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  } else if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  return state;
};

const store = createStore(counterReducer);
*/
//#endregion

const store = configureStore({
  // use this when there are multiple slices
  reducer: {
    counter: counterSlice.reducer,
    auth: authenticationSlice.reducer,
  },

  /* use this when theres only one slice
  reducer: counterSlice.reducer,
  */
});

export const counterActions = counterSlice.actions;
export const authActions = authenticationSlice.actions;

export default store;
