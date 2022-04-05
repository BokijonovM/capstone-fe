import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import MyLoader from "../loader/MyLoader";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Posted() {
  const navigate = useNavigate();
  const [myJobs, setMyJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const userMe = useSelector((state) => state.userMe);
  const myToken = localStorage.getItem("MyToken");
  const dataJson = JSON.parse(JSON.stringify(myToken));
  const fetchMyJobs = async () => {
    try {
      let res = await fetch(
        `${process.env.REACT_APP_API_MAIN_URL}/users/me/jobs`,
        {
          method: "GET",
          headers: {
            authorization: dataJson,
          },
        }
      );
      if (res.ok) {
        let data = await res.json();
        setMyJobs(data);
        setIsLoading(false);
      } else {
        console.log("fetch my jobs error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMyJobs();
  }, []);

  return (
    <div className="w-100 m-3">
      <div className="d-flex justify-content-between px-3">
        <h6>Posted jobs</h6>
        <h6>{myJobs.length}</h6>
      </div>
      {isLoading ? (
        <MyLoader />
      ) : (
        myJobs.map((job) => {
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
                    onClick={() => navigate(`/my-jobs/${job._id}`)}
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

export default Posted;
