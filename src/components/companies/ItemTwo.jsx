import React, { useEffect, useState } from "react";
import "./items.css";
import { Col, Card, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import MyLoader from "../loader/MyLoader";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";

function ItemTwo({ company }) {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const fetchJobs = async () => {
    try {
      let res = await fetch(
        `${process.env.REACT_APP_API_MAIN_URL}/jobs/c-search/${company.name}`
      );
      if (res.ok) {
        let data = await res.json();
        setJobs(data);
        setIsLoading(false);
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
    <div className="item-2-main-div m-0 p-0">
      <Row xs={1} md={2} className="g-4 m-0 p-0">
        {isLoading ? (
          <MyLoader />
        ) : (
          jobs.map((job) => {
            return (
              <Col className="px-2" key={job._id}>
                <div
                  className="myJobs-posted-2nd-main-div px-3 my-2"
                  key={job._id}
                >
                  <Avatar
                    className="company-cover-image"
                    alt={job.title}
                    src={company.cover}
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
                      Salary
                    </h6>
                    <h6 style={{ fontSize: "12px" }}>${job.salary}</h6>
                  </div>
                  <div className="ml-auto">
                    <h6 className="text-muted" style={{ fontSize: "14px" }}>
                      Applicants
                    </h6>
                    <h6 style={{ fontSize: "12px" }}>
                      {job.applicants.length}
                    </h6>
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
              </Col>
            );
          })
        )}
      </Row>
    </div>
  );
}

export default ItemTwo;
