import React from "react";
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Icons,
  ReactMarkdown
} from "../../../components/index";
import { connect } from "react-redux";
import ComponentsAction from "../../../ActionTypes/ComponentsAction";
import MainContent from "../../MainContent";
import CodeBlock from "../../CodeBlock";

const SendIcon = Icons.Send;
const DraftsIcon = Icons.Drafts;
const InboxIcon = Icons.MoveToInbox;
const ExpandLess = Icons.ExpandLess;
const ExpandMore = Icons.ExpandMore;
const StarBorder = Icons.StarBorder;

function NestedList(props) {
  const { openNestedList, openCloseNestedList } = props;

  const codeSample = `
    import React from 'react';
    import { Collapse, List, ListItem, ListItemIcon, ListItemText, ListSubheader, } from '@material-ui/core'

    function renderNestedList() {
      return (
        <List
          component="default: ul | any other element"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="default: ul | any other element">Nested List Items</ListSubheader>
          }
        >
          <ListItem button>
            <ListItemIcon>
              <Your Icon/>
            </ListItemIcon>
            <ListItemText primary="Your list item content" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Your Icon />
            </ListItemIcon>
            <ListItemText primary="Your list item content" />
          </ListItem>
          <ListItem button onClick={Your click handler}>
            <ListItemIcon>
              <Your Icon />
            </ListItemIcon>
            <ListItemText primary="Your list item content" />
          </ListItem>
          <Collapse in="true | false">
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Your list item content" />
              </ListItem>
            </List>
          </Collapse>
        </List>
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

  function handleClick() {
    openCloseNestedList();
  }

  function renderNestedList() {
    return (
      <div className="component-container">
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div">Nested List Items</ListSubheader>
          }
          className="list-gallery"
        >
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Sent mail" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {openNestedList ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openNestedList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className="nested">
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    );
  }

  return (
    <MainContent
      label="Nested List section"
      content={renderNestedList()}
      code={code}
    />
  );
}

const mapStateToProps = state => {
  return {
    openNestedList: state.componentsReducer.openNestedList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openCloseNestedList: () => {
      dispatch(ComponentsAction.openCloseNestedList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NestedList);
