import React from "react";
import { Typography, ReactMarkdown } from "../../../components";
import MainContent from "../../MainContent";
import CodeBlock from "../../CodeBlock";

function Tabs() {
  const codeSample = `
    import React from 'react';
    import { AppBar, Tabs, Tab } from '@material-ui/core'

    function renderTabs() {
      return (
        <div>
          <AppBar>
            <Tabs
              value={Your selected tab value}
              onChange={Your change handler}
              variant="fullWidth"
              indicatorColor="primary | secondary"
            >
              <Tab value={Your tab value} label={Your label} />
              <Tab value={Your tab value} label={Your label} />
            </Tabs>
          </AppBar>
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

  function renderTabs() {
    
    return (
      <div className="component-container">
      <Typography variant="h3">
        More details in <i>Sample Usage</i>
      </Typography>
      </div>
    );
  }

  return <MainContent
      label="Tabs section"
      content={renderTabs()}
      code={code}
    />;
}

export default Tabs;
