import React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";

export default function Dialer() {
  return (
    <div>
      <SpeedDial
        icon={<SpeedDialIcon />}
        ariaLabel="SpeedDial basic example"
        sx={{ position: "fixed", bottom: 16, right: 22 }}
      ></SpeedDial>
    </div>
  );
}
