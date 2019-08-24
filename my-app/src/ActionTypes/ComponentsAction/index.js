import Action from "../ActionIDs";

const openCloseDialog = () => {
  return {
    type: Action.OPEN_CLOSE_DIALOG
  };
}

const openCloseNestedList = () => {
  return {
    type: Action.OPEN_CLOSE_NESTED_LIST
  };
}

const openCloseNotification = () => {
  return {
    type: Action.OPEN_CLOSE_NOTIFICATION
  }
}

export default { openCloseDialog, openCloseNestedList, openCloseNotification };