import Action from "../ActionIDs";

const openCloseDialog = () => {
  return {
    type: Action.OPEN_CLOSE_DIALOG
  };
};

const openCloseNestedList = () => {
  return {
    type: Action.OPEN_CLOSE_NESTED_LIST
  };
};

const openCloseNotification = () => {
  return {
    type: Action.OPEN_CLOSE_NOTIFICATION
  };
};

const changeTablePage = page => {
  return {
    type: Action.CHANGE_TABLE_PAGE,
    page: page
  };
};

const setRowsPerPage = rowsPerPage => {
  return {
    type: Action.CHANGE_ROWS_PER_PAGE,
    rowsPerPage: rowsPerPage
  };
};

const setOrder = order => {
  return {
    type: Action.CHANGE_COLUMN_ORDER,
    order: order
  };
};

const setOrderBy = orderBy => {
  return {
    type: Action.CHANGE_COLUMN_ORDER_BY,
    orderBy: orderBy
  }
}

export default {
  openCloseDialog,
  openCloseNestedList,
  openCloseNotification,
  changeTablePage,
  setRowsPerPage,
  setOrder,
  setOrderBy
};
