import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import "./style.css";

export default function OtherLoader() {
  return (
    <div className="mt-5">
      <Box sx={{ width: "100%" }}>
        <LinearProgress color="secondary" />
      </Box>
    </div>
  );
}
