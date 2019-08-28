import React from "react";
import { connect } from "react-redux";
import { AppHeader, AppNavBar, Footer } from "../components/";
import Home from "./Home";
import Colors from "./Colors";
import Components from "./Components";
import Charts from "./Charts";
import Iconography from "./Iconography";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderAction from "../ActionTypes/HeaderAction";

function App(props) {
  const { open, navBarContent, controlNavBar } = props;

  return (
    <React.Fragment>
      <Router basename={"/React-Redux-Project"}>
        <AppHeader controlNavBar={controlNavBar} />
        <AppNavBar open={open} content={navBarContent} />
        <div className={open ? "sidebar open" : "sidebar close"}>
          <Switch>
            <Route exact path={"/"} component={Home} key="Home" />

            <Route path="/Colors" component={Colors} key="Colors" />

            {Object.keys(Components).map(component => (
              <Route
                path={`/Components/${component}`}
                component={Components[component]}
                key={`/Components/${component}`}
              />
            ))}

            {Object.keys(Charts).map(chart => (
              <Route
                path={`/Charts/${chart}`}
                component={Charts[chart]}
                key={`/Charts/${chart}`}
              />
            ))}

            <Route path="/Iconography" component={Iconography} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    open: state.navBarReducer.openNavBar,
    navBarContent: state.navBarReducer.navBar
  };
};

const mapDispatchToProps = dispatch => {
  return {
    controlNavBar: () => {
      dispatch(HeaderAction.controlNavBar());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
