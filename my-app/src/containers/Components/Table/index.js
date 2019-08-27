import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Paper,
  Toolbar,
  Typography,
  ReactMarkdown
} from "../../../components";
import { connect } from "react-redux";
import ComponentsAction from "../../../ActionTypes/ComponentsAction";
import MainContent from "../../MainContent";
import CodeBlock from "../../CodeBlock";
import { headRows, data } from "./data";

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headRows.map(row => (
          <TableCell
            key={row.id}
            align="left"
            sortDirection={orderBy === row.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === row.id}
              direction={order}
              onClick={createSortHandler(row.id)}
            >
              {row.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const EnhancedTableToolbar = props => {
  return (
    <Toolbar>
      <div>
        <Typography variant="h6" id="tableTitle">
          {props.label}
        </Typography>
      </div>
    </Toolbar>
  );
};

function EnhancedTable(props) {
  const {
    page,
    changeTablePage,
    rowsPerPage,
    setRowsPerPage,
    order,
    setOrder,
    orderBy,
    setOrderBy
  } = props;

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  }

  function handleChangePage(event, newPage) {
    changeTablePage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    changeTablePage(0);
  }

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <Paper>
      <EnhancedTableToolbar label="Nutrition" />
      <Table aria-labelledby="tableTitle" size="medium">
        <EnhancedTableHead
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
          rowCount={data.length}
        />
        <TableBody>
          {stableSort(data, getSorting(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                  <TableCell component="th" id={labelId} scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              );
            })}
          {emptyRows > 0 && (
            <TableRow style={{ height: 49 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

function TableDemo(props) {
  const codeSample = `
    import React from 'react';
    import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'

    function renderTable() {
      return (
        <div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell 
                  align="inherit | left | right | center | justify"
                  padding="default | checkbox | none"
                  size="small | medium
                  sortDirection={"asc | desc" | false}
                >
                  Your column label
                </TableCell>
                ...
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover={true | false} selected={true | false}>
                <TableCell 
                  align="inherit | left | right | center | justify"
                  padding="default | checkbox | none"
                  size="small | medium
                  sortDirection={"asc | desc" | false}
                >
                  Your column label
                </TableCell>
              </TableRow>
              ...
            </TableBody>
          </Table>
        </div>
      );
    }
    `;

  let code = (
    <ReactMarkdown
      source={codeSample}
      renderers={{ code: CodeBlock }}
      className="sample-code"
    />
  );

  function renderTable() {
    return (
      <div className="component-container">
        <div className="table-gallery">
          <EnhancedTable
            page={props.page}
            changeTablePage={props.changeTablePage}
            rowsPerPage={props.rowsPerPage}
            setRowsPerPage={props.setRowsPerPage}
            order={props.order}
            setOrder={props.setOrder}
            orderBy={props.orderBy}
            setOrderBy={props.setOrderBy}
          />
        </div>
      </div>
    );
  }

  return (
    <MainContent label="Table section" content={renderTable()} code={code} />
  );
}

const mapStateToProps = state => {
  return {
    page: state.componentsReducer.tablePage,
    rowsPerPage: state.componentsReducer.rowsPerPage,
    order: state.componentsReducer.columnOrder,
    orderBy: state.componentsReducer.columnOrderBy
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeTablePage: page => {
      dispatch(ComponentsAction.changeTablePage(page));
    },
    setRowsPerPage: rowsPerPage => {
      dispatch(ComponentsAction.setRowsPerPage(rowsPerPage));
    },
    setOrder: order => {
      dispatch(ComponentsAction.setOrder(order));
    },
    setOrderBy: orderBy => {
      dispatch(ComponentsAction.setOrderBy(orderBy));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableDemo);
