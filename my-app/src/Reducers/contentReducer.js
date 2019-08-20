import Action from "../ActionTypes/ActionIDs"

const initState = {
  tab: "Demo",
}

function contentReducer(state = initState, action) {
  switch (action.type) {
    case Action.SWITCHING_TABS:
      return {
        ...state,
        tab: action.value,
      }
    case Action.RESET_TABS:
      return {
        ...state,
        tab: "Demo"
      }
    default:
      return state;
  }
}

export default contentReducer;