import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import SingleJobMap from "../../myMap/SingleJobMap";
import CompImage from "./CompImage";
import Button from "@mui/material/Button";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MyLoader from "../../loader/MyLoader";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import Filter2RoundedIcon from "@mui/icons-material/Filter2Rounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import Tooltip from "@mui/material/Tooltip";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./style.css";
import JobStats from "./JobStats";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import AllApplicants from "./AllApplicants";
import DOMPurify from 'dompurify';

function MyJob() {
  const navigate = useNavigate();
  const params = useParams();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userMe = useSelector((state) => state.userMe);
  const [footer, setFooter] = useState(false);

  const myToken = localStorage.getItem("MyToken");
  const dataJson = JSON.parse(JSON.stringify(myToken));

  const extraHeader = () => {
    if (window.scrollY >= 200) {
      setFooter(true);
    } else {
      setFooter(false);
    }
  };

  window.addEventListener("scroll", extraHeader);
  const fetchJob = async () => {
    try {
      let res = await fetch(
        `${process.env.REACT_APP_API_MAIN_URL}/jobs/${params.id}`
      );
      if (res.ok) {
        let data = await res.json();
        setJob(data);
        console.log("job", data);
        setIsLoading(false);
      } else {
        console.log("fetch error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }

  const deleteJob = async () => {
    try {
      let res = await fetch(
        `${process.env.REACT_APP_API_MAIN_URL}/jobs/${params.id}`,
        {
          method: "DELETE",
          headers: {
            authorization: dataJson,
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        console.log("deleted");
      } else {
        console.log("delete error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJob();
  }, []);
  return (
    <div className="w-100 p-0 m-0">
      {isLoading ? (
        <MyLoader />
      ) : (
        <Row className="m-3 p-0" sm={1} md={2}>
          <Col className="" md={8}>
            <Row className="job-title-comp-info-row m-0">
              <Row className="w-100 m-3 align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <CompImage job={job.companyName} />
                  <div className="ml-3">
                    <h2 className="job-details-hob-title mb-1">{job.title}</h2>
                    <h6 className="job-details-hob-company-name mb-2">
                      {job.companyName}
                    </h6>
                    <h6
                      className="mb-0 text-muted"
                      style={{ fontSize: "12px" }}
                    >
                      SALARY
                    </h6>
                    <h6 style={{ fontSize: "17px" }}>${job.salary}</h6>
                  </div>
                </div>
                <Tooltip title="Delete" placement="left">
                  <Button
                    className="delete-job-apply-btn"
                    variant="contained"
                    onClick={() => {
                      deleteJob();
                      navigate("/");
                    }}
                  >
                    DELETE
                  </Button>
                </Tooltip>
              </Row>
              <Row className="m-3 w-100 justify-content-between">
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="text-muted" style={{ fontSize: "12px" }}>
                      EMPLOYMENT TYPE
                    </h6>
                    <h6 className="d-flex align-items-center">
                      <WorkIcon className="mr-2" style={{ color: "#564de5" }} />
                      {job.type}
                    </h6>
                  </div>
                  <div style={{ marginLeft: "8vw" }}>
                    <h6 className="text-muted" style={{ fontSize: "12px" }}>
                      LOCATION
                    </h6>
                    <h6 className="d-flex align-items-center">
                      <LocationOnRoundedIcon
                        className="mr-2"
                        style={{ color: "#564de5" }}
                      />
                      {job.location}
                    </h6>
                  </div>
                </div>

                <div>
                  <h6 className="text-muted" style={{ fontSize: "12px" }}>
                    EXPERIENCE
                  </h6>
                  <h6 className="d-flex align-items-center">
                    <Filter2RoundedIcon
                      className="mr-2"
                      style={{ color: "#564de5" }}
                    />
                    {job.experience}
                  </h6>
                </div>
              </Row>
              <Row className="m-3 w-100">
                <div>
                  <h6 className="text-muted" style={{ fontSize: "12px" }}>
                    TECHNOLOGIES
                  </h6>
                  <div className="d-flex align-items-center">
                    {job.techStack.length !== 0 ? (
                      job.techStack.map((j) => {
                        return (
                          <Tooltip title={j.skill} placement="top">
                            <h6 className="singe-job-all-skills">{j.skill}</h6>
                          </Tooltip>
                        );
                      })
                    ) : (
                      <h6 className="">
                        <Tooltip title={job.techs} placement="top">
                          <h6 className="singe-job-all-skills">{job.techs}</h6>
                        </Tooltip>

                      </h6>
                    )}
                  </div>
                </div>
              </Row>
              <Row className="m-3 w-100 flex-column justify-content-center">
                <h6 className="text-muted" style={{ fontSize: "12px" }}>
                  DETAILS
                </h6>
                <div>
                  <h6 className="mt-3" style={{ fontSize: "20px" }}>
                    JOB DESCRIPTION
                  </h6>
                  <div className="preview" dangerouslySetInnerHTML={createMarkup(job.description)}></div>
                </div>
              </Row>
              <Row className="statistics-down-btn-row m-0 p-0 pr-3 mb-4">
                <JobStats applicants={job.applicants} />
              </Row>
              {footer ? (
                <Row className="apply-down-btn-row m-0 p-0 px-3 justify-content-between w-100">
                  <ArrowBackOutlinedIcon
                    className="go-back-arrow"
                    onClick={() => navigate("/")}
                  />
                  <div className="d-flex align-items-center ml-3">
                    {job.techStack.length !== 0 ? (
                      job.techStack.slice(0, 3).map((j) => {
                        return (
                          <Tooltip title={j.skill} placement="top">
                            <h6 className="singe-job-all-skills-down mb-0">
                              {j.skill}
                            </h6>
                          </Tooltip>
                        );
                      })
                    ) : (

                      <Tooltip title={job.techs} placement="top">
                        <h6 className="singe-job-all-skills-down mb-0">
                          {job.techs}
                        </h6>
                      </Tooltip>

                    )}
                  </div>
                  <h6 className="mb-0 text-light ml-auto mr-3">
                    ${job.salary}
                  </h6>
                  <Tooltip title="Delete" placement="top">
                    <Button
                      className="delete-job-apply-btn-down"
                      variant="contained"
                      onClick={() => {
                        deleteJob();
                        navigate("/");
                      }}
                    >
                      DELETE
                    </Button>
                  </Tooltip>
                </Row>
              ) : (
                ""
              )}
            </Row>
          </Col>

          <Col className="col-for-map-and-apply " md={4}>
            <Row className="col-2-for-map-2nd-div m-0 mt-n1">
              <SingleJobMap />
            </Row>
          </Col>
        </Row>
      )}
      <Row className="w-100 m-0 p-0 mb-5 justify-content-center align-items-center">
        <AllApplicants />
      </Row>

    </div>
  );
}

export default MyJob;


// <RemoveCircleRoundedIcon style={{ color: "#564de5" }} />