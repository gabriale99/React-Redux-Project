import React from "react";
import { Typography, Icons, CodeDialog } from "../../components";
import { connect } from "react-redux";
import IconAction from "../../ActionTypes/IconAction";

function Iconography(props) {
  const { open, selected, openCodeDialog, closeCodeDialog } = props;

  function handleClick(key) {
    if (open) {
      return;
    }
    openCodeDialog(key);
  }

  function renderIcons() {
    let keys = Object.keys(Icons);
    let icons = keys.map(label => {
      let CurrIcon = Icons[label];
      return (
        <li
          key={label}
          onClick={handleClick.bind(null, label)}
          className="icon"
        >
          <CurrIcon />
        </li>
      );
    });
    return icons;
  }

  function renderCodeDialog(label) {
    if (!label) return
    let code = `
      import React from 'react';
      imoprt SvgIcon from '@material-ui/core/SvgIcon'
      import ${label} from '@material-ui/icons/${label}';

      function renderIcon() {
        return(
          <div>
            <SvgIcon>
              <${label} />
            </SvgIcon>
          </div>
        );
      }
      `;
    const Icon = Icons[label];
    let title = <div>Sample Usage of {label} <Icon /></div>
    return (
      <CodeDialog
        title={title}
        open={open}
        code={code}
        closeCodeDialog={closeCodeDialog}
      />
    );
  }

  return (
    <div className="icon-container">
      <Typography variant="h6">Click an Icon to see sample usage</Typography>
      <ul className="icon-gallery">{renderIcons()}</ul>
      {renderCodeDialog(selected)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    open: state.iconReducer.open,
    selected: state.iconReducer.selected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openCodeDialog: label => {
      dispatch(IconAction.openCodeDialog(label));
    },
    closeCodeDialog: () => {
      dispatch(IconAction.closeCodeDialog());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Iconography);
