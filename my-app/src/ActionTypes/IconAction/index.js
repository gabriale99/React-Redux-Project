import Action from "../ActionIDs";

const openCodeDialog = (label) => {
  return{
    type: Action.OPEN_CODE_DIALOG,
    selected: label
  }
};

const closeCodeDialog = () => {
  return{
    type: Action.CLOSE_CODE_DIALOG,
  }
}

export default { openCodeDialog, closeCodeDialog };