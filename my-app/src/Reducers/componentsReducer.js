import Action from "../ActionTypes/ActionIDs";

const initState = {
  openDialog: false,
  openNestedList: false,
  openNotification: false,
  tablePage: 0,
  rowsPerPage: 5,
  columnOrder: "asc",
  columnOrderBy: "calories"
};

function componentsReducer(state = initState, action) {
  switch (action.type) {
    case Action.OPEN_CLOSE_DIALOG:
      return {
        ...state,
        openDialog: !state.openDialog
      };
    case Action.OPEN_CLOSE_NESTED_LIST:
      return {
        ...state,
        openNestedList: !state.openNestedList
      };
    case Action.OPEN_CLOSE_NOTIFICATION:
      return {
        ...state,
        openNotification: !state.openNotification
      };
    case Action.CHANGE_TABLE_PAGE:
      return {
        ...state,
        tablePage: action.page

      };
    case Action.CHANGE_ROWS_PER_PAGE:
      return {
        ...state,
        rowsPerPage: action.rowsPerPage
      }
    case Action.CHANGE_COLUMN_ORDER:
      return {
        ...state,
        columnOrder: action.order
      }
      case Action.CHANGE_COLUMN_ORDER_BY:
          return {
            ...state,
            columnOrderBy: action.orderBy
          }
    default:
      return state;
  }
}

export default componentsReducer;
