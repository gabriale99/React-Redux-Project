import React from "react";
import { Dialog, DialogTitle, DialogContent, ReactMarkdown } from "../";
import SyntaxHighlighter from "react-syntax-highlighter";

function CodeDialog(props) {
  const { title, open, code, closeCodeDialog } = props;

  const SampleCode = props => {
    return (
      <SyntaxHighlighter language="javascript" className="sampleCode">
        {props.value}
      </SyntaxHighlighter>
    );
  };

  function handleClose() {
    closeCodeDialog();
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        {title}
      </DialogTitle>
      <DialogContent>
        <ReactMarkdown
          source={code}
          renderers={{ code: SampleCode }}
          className="sampleCode"
        />
      </DialogContent>
    </Dialog>
  );
}

export default CodeDialog;
