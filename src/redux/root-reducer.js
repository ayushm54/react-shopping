import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // getting local storage

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

const persistConfig = {
  key: "root",
  storage: storage, // type os storage to use
  // to specify which state slices to persist
  // we onlyneed to persist cart as user is already handled by firebase
  whitelist: ["cart"],
};

// the root reducer is the main reducer of our application
// it contains and combines all the individual reducers into one single state

// combineReducers would combine all the state from individual reducer
// in one single object, that is the main state of our application
// export default combineReducers({
//   user: userReducer,
//   cart: cartReducer,
// });

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

// now when we add persistence to the store(i.e. rootReducer)
// it would now save the cart state slice in local storage
// and as and when app reloads or we reopen the browser, the root state would read
// the cart state slice from the localstorage
export default persistReducer(persistConfig, rootReducer);
