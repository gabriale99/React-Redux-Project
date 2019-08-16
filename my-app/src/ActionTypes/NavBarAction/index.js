import Action from "../ActionIDs";

const showHideNavBarSubItem = (l) => {
  return{
    type: Action.SHOW_HIDE_NAV_BAR_SUB_ITEM,
    label: l
  };
};

export default {showHideNavBarSubItem}