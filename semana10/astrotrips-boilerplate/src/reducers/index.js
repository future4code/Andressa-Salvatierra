import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import tripsReducer from "../reducers/tripsReducer"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    tripsReducer
  });
