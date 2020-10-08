import { createSelector } from "reselect";

// reselect is basically used for caching and helps in improving performance
// by checking the new calculated value against the cached and if its the same
// as cached value, then the old value is passed to te component as a prop
// and hence the component is not rerendered improving performance
// basically it is used with mapStateToProps

// this is a input selector
// a input selector dosent use createSelector (i.e. reselect library)
// it takes the state and returns a slie of it
const selectCart = (state) => {
  return state.cart;
};

//this is an output selector, it uses createSelector
// when we use createSelector, we are creating a memoized (cached) selector
// it takes 2 args, 1st -> the array of all necessary input selectors
// 2nd -> a function that would return the expected value from this selector
export const selectCartItems = createSelector([selectCart], (cart) => {
  return cart.cartItems;
});

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
