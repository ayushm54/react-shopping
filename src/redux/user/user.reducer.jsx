// a reducer is just a functions which receives 2 arguments
// the current state and the action we want to perform
// in order to change the current state
// an actions is an object that contains 2 fields: a type and a payload

import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

// for the very first call to reducer by redux, the current state is not defined
// so we are assigning a default value of the INITIAL_STATE to the current State
const userReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        // always include all the fields in the current State
        // and only modify the field that this action neeeds to
        // and return a new object finally
        ...currentState,
        currentUser: action.payload,
      };

    default:
      return currentState; // if none of the case match then we should always return the current state
  }
};

export default userReducer;
