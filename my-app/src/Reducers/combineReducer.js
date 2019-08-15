import { combineReducers } from 'redux';
import menuReducer from "./menuReducer.js";
import navBarReducer from "./navBarReducer.js";

const combineReducer = combineReducers({
  menuReducer,
  navBarReducer,
});

export default combineReducer;