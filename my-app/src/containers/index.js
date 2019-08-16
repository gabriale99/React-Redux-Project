import React from 'react';
import { connect } from 'react-redux'
import { AppHeader, AppNavBar } from '../components/';
import Home from './Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HeaderAction from '../ActionTypes/HeaderAction';


function App(props) {
  const { open, navBarContent, controlNavBar } = props;

  return (
    <React.Fragment>
      <AppHeader controlNavBar={controlNavBar}/>
      <AppNavBar open={open} content={navBarContent}/>
      <Router>
        <div className="navBarOpen">
          <h1>SOMETHING SHOULD SHOW</h1>
          <Route path="/" component={Home} />
        </div>
      </Router>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    open: state.navBarReducer.openNavBar,
    navBarContent: state.navBarReducer.navBar
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    controlNavBar: () => { dispatch(HeaderAction.controlNavBar()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
