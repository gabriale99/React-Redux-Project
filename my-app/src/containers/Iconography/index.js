import React from "react";
import { SvgIcon, Typography, Icons } from "../../components";

function Iconography() {
  let keys = Object.keys(Icons);
  return (
    <div className="icon-container">
      <Typography variant="h6">Click an Icon to see sample usage</Typography>
      {keys.map(label => {
        let CurrIcon = Icons[label];
        return (
          <SvgIcon key={label}>
            <CurrIcon />
          </SvgIcon>
        );
      })}
    </div>
  );
}

export default Iconography;
