import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Icons } from '../';
import { connect } from 'react-redux'
import NavBarAction from "../../ActionTypes/NavBarAction"

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

  function renderListItem(item) {
    let Icon = Icons[item.icon];
    let label = item.label;
    let subList, expand;
    if (!!item.subNavItems) {
      subList = renderList(item.subNavItems);
      expand = (
        <ListItemIcon className="navBarExpandIcon">
          {props.navBarSub[label] ?
            <ExpandLess /> : <ExpandMore />}
        </ListItemIcon>)
    }
    return (
      <React.Fragment key={label}>
        <ListItem button key={label}
          onClick={!!subList ? () => handleClick(label) : null}
          className="navBarItem">
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={label} className="navBarLabel" />
          {expand}
        </ListItem>
        {!!subList ?
          <Collapse in={props.navBarSub[label]} timeout="auto" unmountOnExit>
            {subList}
          </Collapse> :
          null
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
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppNavBar);