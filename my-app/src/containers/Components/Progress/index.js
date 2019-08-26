import React from "react";
import {
  CircularProgress,
  LinearProgress,
  Typography,
  ReactMarkdown
} from "../../../components";
import MainContent from "../../MainContent";
import CodeBlock from "../../CodeBlock";

function Progress() {
  const codeSample = `
    import React from 'react';
    import { CircularProgress, LinearProgress } from '@material-ui/core'

    function renderSpinner() {
      return (
        <div >
          <CircularProgress 
            color="primary | secondary | inherit"
            size={Your size | default: 40}
            variant="determinate | indeterminate | static"
          />
        </div>
      );
    }

    function renderProgressBar() {
      return (
        <div >
          <CircularProgress 
            color="primary | secondary"
            variant="determinate | indeterminate | buffer | query"
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

  function renderProgress() {
    return (
      <div className="progress component-container">
        <Typography variant="h5">Spinner</Typography>
        {renderSpinner()}
        <Typography variant="h5">Progress Bar</Typography>
        {renderProgressBar()}
      </div>
    );
  }

  function renderSpinner() {
    return (
      <div className="spinner-container">
        <CircularProgress className="spinner" />
        <CircularProgress color="secondary" className="spinner" />
      </div>
    );
  }

  function renderProgressBar() {
    return (
      <div className="progress-bar-container">
        <LinearProgress className="progress-bar" />
        <br />
        <LinearProgress className="progress-bar" color="secondary" />
      </div>
    );
  }

  return (
    <MainContent
      label="Progress section"
      content={renderProgress()}
      code={code}
    />
  );
}

export default Progress;
