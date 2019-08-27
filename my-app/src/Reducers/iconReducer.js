import Action from "../ActionTypes/ActionIDs";

const initState = {
  open: false,
  selected: ""
};

function iconReducer(state = initState, action) {
  switch (action.type) {
    case Action.OPEN_CODE_DIALOG:
      return {
        ...state,
        open: true,
        selected: action.selected
      };
    case Action.CLOSE_CODE_DIALOG:
      return {
        ...state,
        open: false,
        selected: ""
      };
    default:
      return state;
  }
}

export default iconReducer;
