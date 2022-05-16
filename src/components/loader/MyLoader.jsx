import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import "./style.css";

export default function MyLoader() {
  return (
    <div className="loader-main-div-1" style={{ width: "100vw" }}>
      <div className="loader-main-box">
        <Box sx={{ width: "100%" }}>
          <LinearProgress color="secondary" />
        </Box>
      </div>
    </div>
  );
}
