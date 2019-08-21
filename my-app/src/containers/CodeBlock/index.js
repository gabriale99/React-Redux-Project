import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arduinoLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

function CodeBlock(props) {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={arduinoLight}
      className="sampleCode"
    >
      {props.value}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
