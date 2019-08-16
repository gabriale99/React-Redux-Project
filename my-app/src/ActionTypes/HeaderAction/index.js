import Action from "../ActionIDs";

const showMenu = (e) => {
  return{
    type: Action.SHOW_MENU_CONTENT,
    event: e
  };
};

const hideMenu = () => {
  return{
    type: Action.HIDE_MENU_CONTENT,
  };
};

const controlNavBar = () => {
  return{
    type: Action.SHOW_HIDE_NAV_BAR,
  };
}

export default { showMenu, hideMenu, controlNavBar };