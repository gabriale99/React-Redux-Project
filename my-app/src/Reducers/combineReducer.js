import { combineReducers } from 'redux';
import menuReducer from "./menuReducer.js";
import navBarReducer from "./navBarReducer.js";
import contentReducer from "./contentReducer.js";
import chartsReducer from "./chartsReducer.js";
import componentsReducer from "./componentsReducer.js"
import iconReducer from "./iconReducer"

const combineReducer = combineReducers({
  menuReducer,
  navBarReducer,
  contentReducer,
  chartsReducer,
  componentsReducer,
  iconReducer,
});

export default combineReducer;