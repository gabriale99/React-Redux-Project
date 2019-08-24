import { combineReducers } from 'redux';
import menuReducer from "./menuReducer.js";
import navBarReducer from "./navBarReducer.js";
import contentReducer from "./contentReducer.js";
import chartsReducer from "./chartsReducer.js";
import componentsReducer from "./componentsReducer.js"

const combineReducer = combineReducers({
  menuReducer,
  navBarReducer,
  contentReducer,
  chartsReducer,
  componentsReducer,
});

export default combineReducer;