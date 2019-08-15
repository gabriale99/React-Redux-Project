import Action from "../ActionTypes/ActionIDs"
import Data from "./data"

const initState = {
  open: true,
  navBar: Data.navBarContent,
}

function navBarReducer(state = initState, action) {
  switch (action.type) {
    case Action.CONTROL_NAV_BAR:
      return {
        ...state,
        open: !state.open,
      }
    default:
      return state;
  }
}

export default navBarReducer;