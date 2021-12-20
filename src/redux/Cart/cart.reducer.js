import { CartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
  //because we want to hide the dropdown when they first get to our website
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};
