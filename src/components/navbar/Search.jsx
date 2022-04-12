import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Search({ allJobs }) {
  console.log("hhh", allJobs);
  const data = allJobs.map(getFullName);
  console.log("ajkdakna", data);
  function getFullName(item) {
    return item.title;
  }
  const top100Films = [
    { label: "hi", year: 1994 },
    { label: "yy", year: 1994 },
  ];
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data}
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
