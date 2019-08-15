import Action from "../ActionTypes/ActionIDs"
import Data from "./data"

const initState = {
  anchorEL: null,
  menuContent: Data.menuContent,
}

function menuReducer(state = initState, action) {
  switch (action.type) {
    case Action.SHOW_MENU_CONTENT:
      return {
        ...state,
        anchorEl: action.event.target,
      }
    case Action.HIDE_MENU_CONTENT:
      return {
        ...state,
        anchorEl: null,
      }
    default:
      return state;
  }
}

export default menuReducer;