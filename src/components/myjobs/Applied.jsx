import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import MyLoader from "../MyLoader";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Applied() {
  const userMe = useSelector((state) => state.userMe);
  const navigate = useNavigate();
  const myToken = localStorage.getItem("MyToken");
  const dataJson = JSON.parse(JSON.stringify(myToken));
  const [myAJobs, setMyAJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchApplied = async () => {
    try {
      let res = await fetch(
        `${process.env.REACT_APP_API_MAIN_URL}/users/me/applied`,
        {
          method: "GET",
          headers: {
            authorization: dataJson,
          },
        }
      );
      if (res.ok) {
        let data = await res.json();
        setMyAJobs(data);
        console.log(data);
        setIsLoading(false);
      } else {
        console.log("fetch my jobs error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApplied();
  }, []);
  return (
    <div className="w-100 m-3">
      <div className="d-flex justify-content-between">
        <h6>Applied jobs</h6>
        <h6>{myAJobs.length}</h6>
      </div>

      {isLoading ? (
        <MyLoader />
      ) : (
        myAJobs.map((job) => {
          return (
            <div className="myJobs-posted-2nd-main-div px-3 my-3" key={job._id}>
              <Avatar
                className="company-cover-image"
                alt={job.title}
                src="/static/images/avatar/1.jpg"
                // src={job.cover}
              />
              <div className="ml-3">
                <h6 className="job-title-posted ">{job.title}</h6>
                <h6 className="job-posted-name-location mb-0">
                  <span>
                    <BusinessIcon className="mr-1" fontSize="12px" />{" "}
                    {job.companyName}
                  </span>
                  <span className="ml-3">
                    <LocationOnIcon className="mr-1" fontSize="12px" />{" "}
                    {job.location}
                  </span>
                </h6>
              </div>
              <div className="ml-auto">
                <h6 className="text-muted" style={{ fontSize: "14px" }}>
                  Applicants
                </h6>
                <h6 style={{ fontSize: "12px" }}>{job.applicants.length}</h6>
              </div>
              <div className="jobs-hover-my-jobs-posted">
                <div className="card-hover-child-div">
                  <h5 className="mb-0 text-light">{job.title}</h5>
                  <Button
                    className="mt-3 text-light show-comp-details-btn"
                    variant="contained"
                    onClick={() => navigate(`/jobs/${job._id}`)}
                  >
                    SHOW DETAILS
                  </Button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Applied;
