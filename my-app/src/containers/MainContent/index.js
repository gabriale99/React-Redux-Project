import React from 'react';
import { Typography } from "../../components/"

function MainContent(props) {
  return (
    <div className="mainContainer">
      <Typography variant="h1">Main Content</Typography>
      <Typography variant="h3">{props.content}</Typography>
    </div>
  );
}

export default MainContent;