import React from "react";
import "./style.css";
import TextField from "@mui/material/TextField";

function MyMap() {
  return (
    <div className="w-100">
      <div
        className="search-fields-main-div-1 mb-2"
        style={{ visibility: "hidden" }}
      >
        <TextField
          id="outlined-basic"
          label="Company"
          variant="outlined"
          size="small"
        />
      </div>
      <div className="my-map-main-div">MyMap</div>
    </div>
  );
}

export default MyMap;
