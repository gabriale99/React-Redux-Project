import Action from "../ActionIDs";

const switchTabs = (value) => {
  return{
    type: Action.SWITCHING_TABS,
    value: value,
  };
}

const resetTabs = () => {
  return{
    type: Action.RESET_TABS,
  };
}

export default { switchTabs, resetTabs };