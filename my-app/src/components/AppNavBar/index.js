import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Icons } from '../';

function AppNavBar(props) {
  function createList() {
    return (
      <div>
        <List className="navBar">
          {props.content.map((item) => {
            let CurIcon = Icons[item.icon]
            return (
              <ListItem button key={item.label}>
                <ListItemIcon children={Icons[item.icon]}>
                  <CurIcon />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            )
          })}
        </List>
      </div>
    );

  }

  return (
    <div className="navBarContainer">
      <Drawer
        variant="persistent"
        anchor="left"
        open={props.open}
      >
        {createList()}
      </Drawer>
    </div>
  );
}


export default AppNavBar;