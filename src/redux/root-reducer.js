import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// the root reducer is the main reducer of our application
// it contains and combines all the individual reducers into one single state

// combineReducers would combine all the state from individual reducer
// in one single object, that is the main state of our application
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
