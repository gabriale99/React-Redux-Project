import { combineReducers } from 'redux';
import menuReducer from "./menuReducer.js";
import navBarReducer from "./navBarReducer.js";
import contentReducer from "./contentReducer.js";

const combineReducer = combineReducers({
  menuReducer,
  navBarReducer,
  contentReducer,
});

export default combineReducer;