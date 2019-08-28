import React from "react";
import MainContent from "../../MainContent";
import {
  Avatar,
  Typography,
  Icons,
  ReactMarkdown
} from "../../../components/index";
import CodeBlock from "../../CodeBlock";

function AvatarDemo() {
  const FolderIcon = Icons.Folder;
  const PageviewIcon = Icons.Pageview;
  const AssignmentIcon = Icons.Assignment;

  const codeSample = `
    import React from 'react';
    import { Avatar } from '@material-ui/core/';
    import { Folder } from '@material-ui/icons/Folder';

    function AvatarDemo() {
      return (
        <Avatar
          src="https://image.flaticon.com/icons/png/512/146/146018.png"
        />
        <Avatar>B</Avatar>
        <Avatar><Folder/></Avatar>
      );
    }`;

  let code = (
    <ReactMarkdown
      source={codeSample}
      renderers={{ code: CodeBlock }}
      className="sample-code"
    />
  );

  const renderAvatars = function() {
    return (
      <div className="component-container">
        {renderImageAvatars()}
        {renderLetterAvatars()}
        {renderIconAvatars()}
      </div>
    );
  };

  const renderImageAvatars = function() {
    return (
      <div className="avatar-content">
        <Typography variant="h5" className="avatar-label">
          Image
        </Typography>
        <div className="avatar-grid">
          <Avatar src="https://cdn.roundicons.com/wp-content/uploads/2017/08/snorlax-Filled-Outline-Icon.png" />
          <Avatar src="https://image.flaticon.com/icons/png/512/146/146018.png" />
          <Avatar
            src="https://img.icons8.com/ios-glyphs/2x/pokemon.png"
            className="pikachu"
          />
        </div>
      </div>
    );
  };

  const renderLetterAvatars = function() {
    return (
      <div className="avatar-content">
        <Typography variant="h5" className="avatar-label">
          Letter
        </Typography>
        <div className="avatar-grid">
          <Avatar>B</Avatar>
          <Avatar className="letterS">S</Avatar>
          <Avatar className="letterLA">LA</Avatar>
        </div>
      </div>
    );
  };

  const renderIconAvatars = function() {
    return (
      <div className="avatar-content">
        <Typography variant="h5" className="avatar-label">
          Svg Icon
        </Typography>
        <div className="avatar-grid">
          <Avatar>
            <FolderIcon />
          </Avatar>
          <Avatar className="pageview">
            <PageviewIcon />
          </Avatar>
          <Avatar className="assignment">
            <AssignmentIcon />
          </Avatar>
        </div>
      </div>
    );
  };

  return (
    <MainContent label="Avatar Section" content={renderAvatars()} code={code} />
  );
}

export default AvatarDemo;
