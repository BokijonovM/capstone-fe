import * as React from "react";
import { useState, useEffect } from "react";
import Search from "./Search";

export default function MySearch() {
  const [allJobs, setAllJobs] = useState([]);

  const fetchAllJobs = async () => {
    try {
      let res = await fetch(`${process.env.REACT_APP_API_MAIN_URL}/jobs`);
      if (res.ok) {
        let data = await res.json();
        setAllJobs(data);
        // data.map((j) => {
        // });

        console.log("setAllJobs", data);
      } else {
        console.log("fetch jobs error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);
  return (
    <div>
      <Search allJobs={allJobs} />
    </div>
  );
}

// <TextField
//   label="Size"
//   id="outlined-size-small"
//   {...params}
//   size="small"
//   label="Movie"
// />;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
