import React from 'react';
import { connect } from 'react-redux'
import { AppBar, Toolbar, Typography, IconButton, SvgIcon, Icons, DropDownMenu, } from '../';
import HeaderAction from '../../ActionTypes/HeaderAction';
import logoConfig from './data'

const MenuButton = Icons.Menu;
const PersonButton = Icons.Person;

class AppHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleNavBarClick = this.handleNavBarClick.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  handleNavBarClick() {
    this.props.controlNavBar();
  }

  handleMenuClick(event) {
    this.props.showMenu(event);
  }

  handleMenuClose() {
    this.props.hideMenu();
  }

  render() {
    const { anchorEl, menuContent } = this.props;
    return (
      <React.Fragment>
        <AppBar className="header">
          <Toolbar className="toolBar">
            <div className='left'>
              <IconButton className="headerButtonContainer" aria-label="navBar" onClick={this.handleNavBarClick}>
                <MenuButton className="headerButton" />
              </IconButton>
              <IconButton className="headerButtonContainer">
                <SvgIcon className="headerButton">
                  <path d={logoConfig}></path>
                </SvgIcon>
              </IconButton>
              <Typography variant="h6" className="headerTitle">
                Design
            </Typography>
            </div>
            <div className="right">
              <IconButton className="headerButtonContainer" aria-label="menu" onClick={this.handleMenuClick}>
                <PersonButton className="headerButton" />
              </IconButton>
              <DropDownMenu
                anchorEl={anchorEl}
                handleClose={this.handleMenuClose}
                content={menuContent}
              />
            </div>
          </Toolbar>
        </AppBar >
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    anchorEl: state.menuReducer.anchorEl,
    menuContent: state.menuReducer.menuContent,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    showMenu: (event) => { dispatch(HeaderAction.showMenu(event)) },
    hideMenu: () => { dispatch(HeaderAction.hideMenu()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);