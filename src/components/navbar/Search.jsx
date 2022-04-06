import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Search({ allJobs }) {
  console.log("hhh", allJobs);
  const top100Films = [{ label: "hi", year: 1994 }];
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 200 }}
      renderInput={(params) => (
        <TextField
          className="search-text-field"
          {...params}
          size="small"
          label="Jobs"
        />
      )}
    />
  );
}

export default Search;
