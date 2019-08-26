import React from "react";
import {
  Button,
  Snackbar,
  SnackbarContent,
  IconButton,
  Icons,
  ReactMarkdown
} from "../../../components/index";
import { connect } from "react-redux";
import ComponentsAction from "../../../ActionTypes/ComponentsAction";
import MainContent from "../../MainContent";
import CodeBlock from "../../CodeBlock";

const CloseIcon = Icons.Close;

function Notification(props) {
  const { openNotification, openCloseNotification } = props;

  const codeSample = `
    import React from 'react';
    import { Button, Snackbar, IconButton } from '@material-ui/core'

    function renderNotification() {
      return (
        <div >
          <Button onClick={handleClick}>Your notification</Button>
          <Snackbar
            anchorOrigin={{
              vertical: "top | bottom",
              horizontal: "left | right | center"
            }}
            open="true | false"
            autoHideDuration={your duration}
            onClose={Your close handler}
            message={<span>Your notification message</span>}
            action={[
              <IconButton
                color="default | primary | secondary | inherit"
                onClick={handleClose}
              >
                <Your icon />
              </IconButton>,
            ]}
          />
        </div>
      );
    }
    `;

  let code = (
    <ReactMarkdown
      source={codeSample}
      renderers={{ code: CodeBlock }}
      className="sample-code"
    />
  );

  function handleClick() {
    openCloseNotification();
  }

  function handleClose() {
    openCloseNotification();
  }

  function renderNotification() {
    return (
      <div className="component-container">
        <Button onClick={handleClick} variant="outlined">
          Check notification
        </Button>
        <Snackbar
          className="notification"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          open={openNotification}
          autoHideDuration={null}
          onClose={handleClose}
        >
          <SnackbarContent
            message={<span>WAAAAAAASSSSSSSSSSUUUUUUUUPPPPPP</span>}
            action={[
              <IconButton key="close" color="inherit" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            ]}
          />
        </Snackbar>
      </div>
    );
  }

  return (
    <MainContent
      label="Notification section"
      content={renderNotification()}
      code={code}
    />
  );
}

const mapStateToProps = state => {
  return {
    openNotification: state.componentsReducer.openNotification
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openCloseNotification: () => {
      dispatch(ComponentsAction.openCloseNotification());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
