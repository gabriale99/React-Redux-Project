import Action from "../ActionTypes/ActionIDs"

const initState = {
  openDialog: false,
  openNestedList: false,
  openNotification: false,
}

function componentsReducer(state = initState, action) {
  switch (action.type) {
    case Action.OPEN_CLOSE_DIALOG:
      return {
        ...state,
        openDialog: !state.openDialog,
      }
    case Action.OPEN_CLOSE_NESTED_LIST:
      return {
        ...state,
        openNestedList: !state.openNestedList,
      }
    case Action.OPEN_CLOSE_NOTIFICATION:
        return {
          ...state,
          openNotification: !state.openNotification,
        }
    default:
      return state;
  }
}

export default componentsReducer;