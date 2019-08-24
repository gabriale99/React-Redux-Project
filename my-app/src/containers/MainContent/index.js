import React from 'react';
import { AppBar, Paper, Tab, Tabs } from "../../components/"
import { connect } from 'react-redux'
import ContentAction from '../../ActionTypes/ContentAction';

class MainContent extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.props.switchTabs(value);
  }

  render() {
    const { label, content, code, tab } = this.props;
    return (
      <Paper className="main-container">
        <AppBar position="static">
          <Tabs
            value={tab}
            className="tabContainer"
            onChange={this.handleChange}
            aria-label="tab"
            variant="fullWidth"
            indicatorColor="primary"
          >
            <Tab value="Demo" label={label} />
            <Tab value="Sample" label="Sample Usage" />
          </Tabs>
        </AppBar>
        {tab === "Demo" && content}
        {tab === "Sample" && code}
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tab: state.contentReducer.tab,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    switchTabs: (value) => { dispatch(ContentAction.switchTabs(value)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);