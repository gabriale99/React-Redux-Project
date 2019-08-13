import React from 'react';
import { Menu, MenuItem } from '../';

function DropDownMenu(props) {

  return (
    <Menu
      anchorEl={props.anchorEl}
      keepMounted
      open={Boolean(props.anchorEl)}
      onClose={props.handleClose}
    >
      <MenuItem onClick={props.handleClose}>Profile</MenuItem>
      <MenuItem onClick={props.handleClose}>My account</MenuItem>
      <MenuItem onClick={props.handleClose}>Logout</MenuItem>
    </Menu>

  );
}

export default DropDownMenu;