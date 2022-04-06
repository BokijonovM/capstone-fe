import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";

function JobImage({ job }) {
  const [company, setCompany] = useState([]);
  const fetchJobs = async () => {
    try {
      let res = await fetch(
        `${process.env.REACT_APP_API_MAIN_URL}/companies/search/${job}`
      );
      if (res.ok) {
        let data = await res.json();
        console.log("jobsssss", data);
        setCompany(data);
      } else {
        console.log("fetch jobs error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJobs();
    console.log("coveeer", job);
  }, []);
  return (
    <div>
      {company.map((c) => {
        return (
          <Avatar
            className="company-cover-image"
            alt="ji"
            src={c.cover}
            // src={job.cover}
          />
        );
      })}
    </div>
  );
}

export default JobImage;
