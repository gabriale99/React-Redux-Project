import React from "react";
import MainContent from "../../MainContent";
import { Avatar, Chip, ReactMarkdown, Icons } from "../../../components/";
import CodeBlock from "../../CodeBlock";

const FaceIcon = Icons.Face;
const DoneIcon = Icons.Done;

function ChipDemo() {
  const codeSample = `
    import React from 'react';
    import { Chip } from '@material-ui/core/';

    function ChipDemo() {
      return (
        <Chip
          avatar={Your avatar} || icon={Your icon}
          label="Your label"
          onClick={Your function}
          onDelete={Your delete function}
          variant="default | outlined"
        />
      );
    }`;

  let code = (
    <ReactMarkdown
      source={codeSample}
      renderers={{ code: CodeBlock }}
      className="sample-code"
    />
  );

  function handleDelete() {
    alert("You clicked the delete icon.");
  }

  function handleClick() {
    alert("You clicked the Chip.");
  }

  function renderChips() {
    return (
      <div className="component-container">
        <div className="chip-gallery">
          <Chip
            variant="outlined"
            color="primary"
            label="basic chip"
            onDelete={handleDelete}
            avatar={<Avatar>FH</Avatar>}
            className="chip"
          />
          <Chip
            avatar={<Avatar>MB</Avatar>}
            label="Clickable Chip"
            onClick={handleClick}
            className="chip"
          />
          <Chip
            avatar={
              <Avatar
                alt="Snorlax"
                src="https://cdn.roundicons.com/wp-content/uploads/2017/08/snorlax-Filled-Outline-Icon.png"
              />
            }
            label="Deletable Chip"
            onDelete={handleDelete}
            className="chip"
          />
          <Chip
            avatar={
              <Avatar>
                <FaceIcon />
              </Avatar>
            }
            label="Clickable Deletable Chip"
            onClick={handleClick}
            onDelete={handleDelete}
            color="secondary"
            className="chip"
          />
          <Chip
            icon={<FaceIcon />}
            label="Clickable Deletable Chip"
            onClick={handleClick}
            onDelete={handleDelete}
            color="secondary"
            className="chip"
          />
          <Chip
            label="Custom delete icon Chip"
            onClick={handleClick}
            onDelete={handleDelete}
            className="chip"
            deleteIcon={<DoneIcon />}
          />
          <Chip
            label="Clickable Link Chip"
            className="chip"
            component="a"
            href="#chip"
            clickable
          />
          <Chip
            avatar={<Avatar>MB</Avatar>}
            label="Primary Clickable Chip"
            clickable
            className="chip"
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
          />
          <Chip
            icon={<FaceIcon />}
            label="Primary Clickable Chip"
            clickable
            className="chip"
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<DoneIcon />}
          />
          <Chip
            label="Deletable Primary Chip"
            onDelete={handleDelete}
            className="chip"
            color="primary"
          />
          <Chip
            avatar={
              <Avatar>
                <FaceIcon />
              </Avatar>
            }
            label="Deletable Secondary Chip"
            onDelete={handleDelete}
            className="chip"
            color="secondary"
          />
          <Chip
            icon={<FaceIcon />}
            label="Deletable Secondary Chip"
            onDelete={handleDelete}
            className="chip"
            color="secondary"
          />
        </div>
      </div>
    );
  }

  return (
    <MainContent label="Chips Section" content={renderChips()} code={code} />
  );
}

export default ChipDemo;
