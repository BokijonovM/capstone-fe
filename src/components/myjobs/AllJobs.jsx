import React, { useState, useEffect } from "react";
import MyLoader from "../loader/MyLoader";
import JobImage from "./JobImage";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import moment from "moment";

function AllJobs() {
  const navigate = useNavigate();
  const [allJobs, setAllJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [byTitle, setByTitle] = useState("");

  const fetchAllJobs = async () => {
    try {
      let res = await fetch(`${process.env.REACT_APP_API_MAIN_URL}/jobs`, {
        method: "GET",
      });
      if (res.ok) {
        let data = await res.json();
        setAllJobs(data);
        setIsLoading(false);
        console.log("all jobs", data);
      } else {
        console.log("fetch all jobs error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllJobs();
  }, []);
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <div className="search-fields-main-div-1">
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          size="small"
          onChange={(e) => setByTitle(e.target.value)}
        />
      </div>

      {isLoading ? (
        <MyLoader />
      ) : (
        allJobs
          .filter((value) => {
            if (byTitle === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(byTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((job) => {
            return (
              <div
                className="all-jobs-main-div-2nd-page my-2 p-4"
                key={job._id}
                onClick={() => navigate(`/jobs/${job._id}`)}
              >
                <div className="d-flex align-items-center">
                  <JobImage job={job.companyName} />
                  <div className="ml-3">
                    <h5 className="mb-1">{job.title}</h5>

                    <h6 className="job-posted-name-location-1 mb-0">
                      <span>
                        <BusinessIcon className="mr-1" fontSize="12px" />{" "}
                        {job.companyName}
                      </span>
                      <span className="ml-3">
                        <LocationOnIcon className="mr-1" fontSize="12px" />{" "}
                        {job.location}
                      </span>
                      <span className="ml-3">
                        <WorkIcon className="mr-1" fontSize="12px" /> {job.type}
                      </span>
                    </h6>
                  </div>
                </div>
                <div className="all-jobs-tech-stack d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex">
                    {job.techStack.slice(0, 3).map((t) => {
                      return (
                        <div
                          className="all-jobs-tech-stack-div m-1 py-1 px-2"
                          key={t._id}
                        >
                          {t.skill}
                        </div>
                      );
                    })}
                  </div>
                  <div className="d-flex">
                    {job.techStack.slice(3, 6).map((t) => {
                      return (
                        <div
                          className="all-jobs-tech-stack-div m-1 py-1 px-2"
                          key={t._id}
                        >
                          {t.skill}
                        </div>
                      );
                    })}
                  </div>
                  <div className="d-flex">
                    {job.techStack.slice(6, 9).map((t) => {
                      return (
                        <div
                          className="all-jobs-tech-stack-div m-1 py-1 px-2"
                          key={t._id}
                        >
                          {t.skill}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="d-flex flex-column align-items-end">
                  <h6 className="" style={{ fontSize: "12px" }}>
                    ${job.salary}
                  </h6>
                  <h6 className="mb-0">
                    {moment
                      .utc(job.createdAt)
                      .local()
                      .startOf("seconds")
                      .fromNow()}
                  </h6>
                </div>
              </div>
            );
          })
      )}
    </div>
  );
}

export default AllJobs;
