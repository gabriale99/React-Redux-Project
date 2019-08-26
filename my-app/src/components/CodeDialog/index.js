import React from "react";
import { Dialog, DialogTitle, DialogContent, ReactMarkdown } from "../";
import SyntaxHighlighter from "react-syntax-highlighter";
// import { arduinoLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

function CodeDialog(props) {
  const { open, code } = props;

  const SampleCode = (props) => {
    return (
      <SyntaxHighlighter
        language="javascript"
        className="sampleCode"
      >
        {props.value}
      </SyntaxHighlighter>
    );
  }

  function handleClose() {
    alert("closing");
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
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