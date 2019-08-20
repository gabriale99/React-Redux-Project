import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Icons } from '../';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import NavBarAction from "../../ActionTypes/NavBarAction"
import ContentAction from "../../ActionTypes/ContentAction"

function AppNavBar(props) {

  const ExpandMore = Icons.ExpandMore;
  const ExpandLess = Icons.ExpandLess;

  function renderList(list, subList = true) {
    let output = []

    list.forEach(item => output.push(renderListItem(item)));

    return (
      <List className={subList ? "navBarSubList" : "navBar"}>
        {output}
      </List>
    );
  }

  function handleClick(label) {
    props.showHideNavBarSubItem(label);
  }

  function resetTabView() {
    props.resetTabs();
  }

  function renderListItem(item) {
    let Icon = Icons[item.icon];
    let label = item.label;
    let url = item.url ? item.url : ""
    let subList, expand;
    if (!!item.subNavItems) {
      subList = renderList(item.subNavItems);
      expand = (
        <ListItemIcon className="navBarExpandIcon">
          {props.navBarSub[label] ?
            <ExpandLess /> : <ExpandMore />}
        </ListItemIcon>)
    }

    let listItem = (
      <ListItem button key={label}
        onClick={!!subList ? () => handleClick(label) : null}
        className="navBarItem">
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={label} className="navBarLabel" />
        {expand}
      </ListItem>
    )

    return (
      <React.Fragment key={label}>
        {url ?
          (
            <NavLink to={url} onClick={resetTabView}>
              {listItem}
            </NavLink>
          ) :
          (
            <React.Fragment>
              {listItem}
              <Collapse in={props.navBarSub[label]} timeout="auto" unmountOnExit>
                {subList}
              </Collapse>
            </React.Fragment >
          )
        }
      </React.Fragment >
    );
  }

  return (
    <div className="navBarContainer">
      <Drawer
        variant="persistent"
        anchor="left"
        open={props.open}
      >
        {renderList(props.content, false)}
      </Drawer>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    navBarSub: state.navBarReducer.navBarSub,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    showHideNavBarSubItem: (label) => { dispatch(NavBarAction.showHideNavBarSubItem(label)) },
    resetTabs: () => { dispatch(ContentAction.resetTabs()) },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppNavBar);