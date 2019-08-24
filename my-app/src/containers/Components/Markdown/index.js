import React from "react";
import { ReactMarkdown } from "../../../components/index";
import MainContent from "../../MainContent";
import CodeBlock from "../../CodeBlock";

function Markdown() {
  const codeDemo = `
    import React from 'react';
    import { Avatar } from '@material-ui/core';
    import Person from '@material-ui/core/Person';

    function renderAvatar() {
      return {
        <div>
          <Avatar>
            <Person />
          </Avatar>
        </div>
      );
    }
  `;

  const codeSample = `
    import React from 'react';
    import { Avatar } from '@material-ui/core';
    import ReactMarkdown from 'react-markdown'
    import Person from '@material-ui/core/Person';

    const code = "
      import React from 'react';
      import { Avatar } from '@material-ui/core';
      import Person from '@material-ui/core/Person';
      import SyntaxHighlighter from "react-syntax-highlighter";
      import { Your style } from "react-syntax-highlighter/dist/esm/styles/hljs";
    
      function renderAvatar() {
        return {
          <div>
            <Avatar>
              <Person />
            </Avatar>
          </div>
        );
      }
    "

    function CodeBlock(props) {
      return (
        <SyntaxHighlighter
          language="javascript"
          style={choose it here https://bit.ly/2HmK3k0}
        >
          {props.value}
        </SyntaxHighlighter>
      );
    }

    function renderMarkdown() {
      return {
        <ReactMarkdown
          source={code}
          renderers={{ code: CodeBlock }}
        />
      );
    }
    `;

  let demo = (
    <ReactMarkdown
      source={codeDemo}
      renderers={{ code: CodeBlock }}
      className="sample-code"
    />
  );

  let code = (
    <ReactMarkdown
      source={codeSample}
      renderers={{ code: CodeBlock }}
      className="sample-code"
    />
  );

  return <MainContent label="Markdown section" content={demo} code={code} />;
}

export default Markdown;
