import React from 'react';
import { Menu, MenuItem } from '../';

function DropDownMenu(props) {
  const { anchorEl, handleClose, content } = props;
  return (
    <Menu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClick={handleClose}
      onClose={handleClose}
    >
      {content ? content.map(item =>
        <a href={item.url} key={item.label} target="_blank" rel="noopener noreferrer">
          <MenuItem button key={item.label}>
            {item.label}
          </MenuItem>
        </a>
      ) : null}
    </Menu>

  );
}

export default DropDownMenu;