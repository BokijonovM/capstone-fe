import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Search({ allJobs }) {
  const data = allJobs.map(getFullName);
  function getFullName(item) {
    return item.title;
  }

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
