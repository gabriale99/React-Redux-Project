import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  ReactMarkdown
} from "../../../components/index";
import { connect } from "react-redux";
import ComponentsAction from "../../../ActionTypes/ComponentsAction";
import MainContent from "../../MainContent";
import CodeBlock from "../../CodeBlock";

function DialogDemo(props) {
  const { openDialog, openCloseDialog } = props;

  const codeSample = `
        import React from 'react';
        import { Dialog, DialogTitle, DialogContent, DialogActuions } from '@material-ui/core'

        const fn = () => null;
        
        function renderDialog() {
          return (
            <div>
              <Dialog
                open="true | false"
                onClose={Your close handler}
              >
                <DialogTitle>Your Title</DialogTitle>
                <DialogContent>Your COntent</DialogContent>
                <DialogActions>
                  <Button 
                    onClick={Your click handler}>
                    Button content
                  </Button>
                  <Button 
                    onClick={Your click handler}>
                    I will try..
                  </Button>
                </DialogActions>
              </Dialog>
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
    openCloseDialog();
  }

  function renderDialog() {
    return (
      <div className="component-container">
        <Button variant="outlined" color="primary" onClick={handleClick}>
          Open it
        </Button>
        <Dialog
          onClose={handleClick}
          aria-labelledby="simple-dialog-title"
          open={openDialog}
          fullWidth
          maxWidth="md"
        >
          <DialogTitle>HEY YOU</DialogTitle>
          <DialogContent>Have a nice day!</DialogContent>
          <DialogActions>
            <Button onClick={handleClick} color="primary">
              Thank you
            </Button>
            <Button onClick={handleClick} color="primary">
              I will try
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  return (
    <MainContent label="Dialog section" content={renderDialog()} code={code} />
  );
}

const mapStateToProps = state => {
  return {
    openDialog: state.componentsReducer.openDialog
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openCloseDialog: () => {
      dispatch(ComponentsAction.openCloseDialog());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogDemo);
