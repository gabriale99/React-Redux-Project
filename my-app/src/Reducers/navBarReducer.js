import Action from "../ActionTypes/ActionIDs"
import Data from "./data"

const initState = {
  openNavBar: true,
  navBar: Data.navBarContent,
  navBarSub: {}
}

function navBarReducer(state = initState, action) {
  switch (action.type) {
    case Action.SHOW_HIDE_NAV_BAR:
      return {
        ...state,
        openNavBar: !state.openNavBar,
      }
    case Action.SHOW_HIDE_NAV_BAR_SUB_ITEM:
      return {
        ...state,
        navBarSub: {
          ...state.navBarSub,
          [action.label]: !state.navBarSub[action.label],
        }
      }
    default:
      return state;
  }
}

export default navBarReducer;