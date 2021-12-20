import { CartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utilis";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  //because we want to hide the dropdown when they first get to our website
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        // spreading all array values, and all addition values will be added at the end
      };
    default:
      return state;
  }
};
