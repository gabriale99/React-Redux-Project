import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, SvgIcon, Icons, DropDownMenu } from '../';
import logoConfig from './data'

const MenuButton = Icons.Menu;
const PersonButton = Icons.Person;

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    }

    this.setAnchorEl = this.setAnchorEl.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }

  setAnchorEl(target) {
    this.setState({anchorEl: target});
  }

  handleClick(event) {
    this.setAnchorEl(event.currentTarget);
  }

  handleClose() {
    this.setAnchorEl(null);
  }

  render() {
    const {anchorEl} = this.state;

    return (
      <AppBar className="header">
        <Toolbar className="toolBar">
          <div className='left'>
            <IconButton className="headerButtonContainer" aria-label="menu">
              <MenuButton className="headerButton" />
            </IconButton>
            <SvgIcon className="logo">
              <path d={logoConfig}></path>
            </SvgIcon>
            <Typography variant="h6" className="headerTitle">
              Design
            </Typography>
          </div>
          <div className="right">
            <IconButton className="headerButtonContainer" onClick={this.handleClick}>
              <PersonButton className="headerButton" />
            </IconButton>
            <DropDownMenu anchorEl={anchorEl} handleClick={this.handleClick} handleClose={this.handleClose}/>
          </div>
        </Toolbar>
      </AppBar >
    );
  }
}

export default AppHeader;