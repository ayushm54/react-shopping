import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist"; // library to save the store to localstorage or sessionstorage

import rootReducer from "./root-reducer";

// this is the main redux store of our whole application contining the whole state
// the middleware is used to run some extra logic before our root reducer handles the action
// for e.g; here we are using redux logger to log out actions before they are handled by the root reducer

// creating an array of middlewares to be used
const middlewares = [];
// just use logger only in development mode
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// here we created a persited store
export const persistor = persistStore(store);

export default { store, persistor };
