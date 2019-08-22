import Action from "../ActionTypes/ActionIDs"

const initState = {
  isVer: true,
}

function chartsReducer(state = initState, action) {
  switch (action.type) {
    case Action.SWITCHING_BARS:
      return {
        ...state,
        isVer: !state.isVer,
      }
    default:
      return state;
  }
}

export default chartsReducer;