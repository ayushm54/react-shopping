import { CartActionTypes } from "./cart.action.types";

export const togglrCartHidden = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  };
};

export const addItemToCart = (item) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item,
  };
};