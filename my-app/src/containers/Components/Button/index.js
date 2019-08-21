import React from "react";
import MainContent from "../../MainContent";
import { Button, Typography, ReactMarkdown } from "../../../components/index";
import CodeBlock from "../../CodeBlock";

function ButtonDemo() {
  const codeSample = `
    import React from 'react';
    import { Button } from '@material-ui/core/';

    function ButtonDemo() {
      return (
        <Button
          color="primary | secondary"
          variant="outlined | contained"
          size="small | medium | large"
        >
          Button
        </Button>

        <Button disabled>Disabled Button</Button>
      );
    }`;

  let code = (
    <ReactMarkdown
      source={codeSample}
      renderers={{ code: CodeBlock }}
      className="sampleCode"
    />
  );

  const renderButtons = function() {
    return (
      <div className="buttonContainer">
        {renderDefaultButtons()}
        {renderContainedButtons()}
        {rendertOutlinedButtons()}
        {renderDifferetButtonSize()}
      </div>
    );
  };

  const renderDefaultButtons = function() {
    return (
      <div className="buttonContent">
        <Typography variant="h5">Default</Typography>
        <div className="buttonGrid">
          <Button> Default </Button>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="secondary" disabled>
            Disabled
          </Button>
          <Button
            href="https://material-ui.com/components/buttons/#text-buttons"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </Button>
        </div>
      </div>
    );
  };

  const renderContainedButtons = function() {
    return (
      <div className="buttonContent">
        <Typography variant="h5">Contained</Typography>
        <div className="buttonGrid">
          <Button variant="contained"> Default </Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="secondary" disabled>
            Disabled
          </Button>
          <Button
            variant="contained"
            href="https://material-ui.com/components/buttons/#contained-buttons"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </Button>
        </div>
      </div>
    );
  };

  const rendertOutlinedButtons = function() {
    return (
      <div className="buttonContent">
        <Typography variant="h5">Outlined</Typography>
        <div className="buttonGrid">
          <Button variant="outlined"> Default</Button>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" disabled>
            Disabled
          </Button>
          <Button
            variant="outlined"
            href="https://material-ui.com/components/buttons/#outlined-buttons"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </Button>
        </div>
      </div>
    );
  };

  const renderDifferetButtonSize = function() {
    return (
      <div className="buttonContent">
        <Typography variant="h5">Sizes</Typography>
        <div className="buttonGrid">
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
          <Button
            variant="contained"
            size="large"
            href="https://material-ui.com/components/buttons/#sizes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </Button>
        </div>
      </div>
    );
  };

  return (
    <MainContent label="Button Section" content={renderButtons()} code={code} />
  );
}

export default ButtonDemo;
