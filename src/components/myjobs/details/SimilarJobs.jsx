import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import MyLoader from "../../loader/MyLoader";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import { Row, Col } from "react-bootstrap";
import JobImage from "../JobImage";
import { useParams } from "react-router-dom";
import moment from "moment";
import WorkIcon from "@mui/icons-material/Work";

function SimilarJobs() {
  const params = useParams();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchJob = async () => {
    try {
      let res = await fetch(
        `${process.env.REACT_APP_API_MAIN_URL}/jobs/${params.id}`
      );
      if (res.ok) {
        let data = await res.json();
        const fetchSimilarJobs = async () => {
          try {
            let res = await fetch(
              `${process.env.REACT_APP_API_MAIN_URL}/jobs/t-search/${data.title}`
            );
            if (res.ok) {
              let data = await res.json();
              setJobs(data);
              setIsLoading(false);
              console.log("SimilarJobs", data);
            } else {
              console.log("fetch error");
            }
          } catch (error) {
            console.log(error);
          }
        };
        fetchSimilarJobs();
      } else {
        console.log("fetch error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJob();
  }, []);
  return (
    <div className="item-2-main-div m-0 p-0">
      <h4 className={jobs.length === 1 ? "d-none" : "pl-2"}>
        Discover similar jobs
      </h4>
      <Row xs={1} md={2} className="g-4 m-0 p-0">
        {isLoading ? (
          <MyLoader />
        ) : (
          jobs.map((job) => {
            return (
              <Col
                className={job._id === params.id ? "d-none" : "py-0 px-2"}
                key={job._id}
              >
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
                      </h6>
                    </div>
                  </div>
                  <div className="d-none all-jobs-tech-stack d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex">
                      {job.techStack.slice(0, 3).map((t) => {
                        return (
                          <div
                            className="all-jobs-tech-stack-div py-1 px-2"
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

                    <h6 className="mb-0 job-posted-n-ago py-1 px-2">
                      {moment
                        .utc(job.createdAt)
                        .local()
                        .startOf("seconds")
                        .fromNow()}
                    </h6>
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

export default SimilarJobs;
