import React from 'react';
import { connect } from 'react-redux'
import { AppHeader, AppNavBar } from '../components/';
import Home from './Home'
import Colors from './Colors'
import Charts from './Charts'
import Iconography from './Iconography'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HeaderAction from '../ActionTypes/HeaderAction';


function App(props) {
  const { open, navBarContent, controlNavBar } = props;

  return (
    <React.Fragment>
      <Router>

        <AppHeader controlNavBar={controlNavBar} />
        <AppNavBar open={open} content={navBarContent} />
        <div className={open ? "sidebar open" : "sidebar close"}>
          <h1>SOMETHING SHOULD SHOW</h1>
          <Route exact path={"/"} component={Home} />
          <Route path="/Colors" component={Colors} />
          <Route path="/Charts/Area" component={Charts.Area} />
          <Route path="/Charts/Bar" component={Charts.Bar} />
          <Route path="/Charts/CircularGridLine" component={Charts.CircularGridLine} />
          <Route path="/Charts/HeatMap" component={Charts.HeatMap} />
          <Route path="/Charts/Line" component={Charts.Line} />
          <Route path="/Charts/LineMark" component={Charts.LineMark} />
          <Route path="/Charts/Pie" component={Charts.Pie} />
          <Route path="/Charts/ScatterPlot" component={Charts.ScatterPlot} />
          <Route path="/Charts/StackedBar" component={Charts.StackedBar} />
          <Route path="/Iconography" component={Iconography} />
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
