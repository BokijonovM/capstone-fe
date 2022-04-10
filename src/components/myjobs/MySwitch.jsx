import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MapIcon from "@mui/icons-material/Map";
import BusinessIcon from "@mui/icons-material/Business";

export default function MySwitch() {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      size="small"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <BusinessIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <MapIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
