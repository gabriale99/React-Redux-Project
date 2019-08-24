import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Icons,
  ReactMarkdown
} from "../../../components/";
import MainContent from "../../MainContent";
import CodeBlock from "../../CodeBlock";

function ExpandPanelDemo() {
  const ExpandMoreIcon = Icons.ExpandMore;

  const codeSample = `
        import React from 'react';
        import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, } from '@material-ui/core'

        function renderExpandPanel() {
          return (
            <div>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  className="single-panel"
                >
                  Expansion Panel
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </ExpansionPanelDetails>
              </ExpansionPanel>
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

  function renderExpandPanel() {
    return (
      <div className="component-container">
        <ExpansionPanel className="single-panel">
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            className="single-panel"
          >
            Expansion Panel 1
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className="single-panel">
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            className="single-panel"
          >
            Expansion Panel 2
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel disabled className="single-panel">
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
          >
            Disabled Expansion Panel
          </ExpansionPanelSummary>
        </ExpansionPanel>
      </div>
    );
  }

  return (
    <MainContent
      label="Expand Panel section"
      content={renderExpandPanel()}
      code={code}
    />
  );
}

export default ExpandPanelDemo;
