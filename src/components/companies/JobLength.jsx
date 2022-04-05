import React, { useEffect, useState } from "react";

function JobLength({ name }) {
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    try {
      let res = await fetch(
        `${process.env.REACT_APP_API_MAIN_URL}/jobs/c-search/${name}`
      );
      if (res.ok) {
        let data = await res.json();
        console.log("jobs", data);
        setJobs(data);
      } else {
        console.log("fetch jobs error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <div>
      <h6 className="mb-0">{jobs.length}</h6>
    </div>
  );
}

export default JobLength;
