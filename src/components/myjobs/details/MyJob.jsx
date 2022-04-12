import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import SingleJobMap from "../../myMap/SingleJobMap";
import CompImage from "./CompImage";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import MyLoader from "../../loader/MyLoader";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import Filter2RoundedIcon from "@mui/icons-material/Filter2Rounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import Tooltip from "@mui/material/Tooltip";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./style.css";
import TextField from "@mui/material/TextField";
import MyJobTech from "./MyJobTech";

function MyJob() {
  const params = useParams();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const userMe = useSelector((state) => state.userMe);

  //   update

  const [salary, setSalary] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");

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
  useEffect(() => {
    fetchJob();
  }, []);
  return (
    <div className="w-100 p-0 m-0">
      {isLoading ? (
        <MyLoader />
      ) : (
        <Row className="m-3 p-0" sm={1} md={2}>
          <Col className="p-0" md={8}>
            <Row className="job-title-comp-info-row m-0">
              <Row className="w-100 m-3 align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <CompImage job={job.companyName} />
                  <div className="ml-3">
                    <Form.Group controlId="formBasicSalary">
                      <Form.Control
                        style={{ fontSize: "30px", fontWeight: "600" }}
                        className="p-0 border-0 shadow-none"
                        type="text"
                        placeholder="Title"
                        defaultValue={job.title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                      />
                    </Form.Group>
                    <h6 className="job-details-hob-company-name mb-2">
                      {job.companyName}
                    </h6>

                    <Form.Group controlId="formBasicSalary">
                      <Form.Control
                        className="p-0 border-0 shadow-none"
                        type="text"
                        placeholder="Salary"
                        defaultValue={job.salary}
                        onChange={(e) => {
                          setSalary(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div>
                  <div>
                    <Tooltip title="Delete" placement="left">
                      <Button
                        className="apply-job-delete-btn"
                        variant="contained"
                      >
                        DELETE
                      </Button>
                    </Tooltip>
                  </div>
                  <Tooltip title="Update" placement="left">
                    <Button
                      className="apply-job-update-btn mt-2"
                      variant="contained"
                    >
                      UPDATE
                    </Button>
                  </Tooltip>
                </div>
              </Row>
              <Row className="m-3 w-100 justify-content-between">
                <div className="d-flex align-items-center">
                  <div>
                    <h6 className="text-muted" style={{ fontSize: "12px" }}>
                      EMPLOYMENT TYPE
                    </h6>
                    <Form.Group controlId="formBasicSalary">
                      <Form.Control
                        className="p-0 border-0 shadow-none"
                        type="text"
                        placeholder="Type"
                        defaultValue={job.type}
                        onChange={(e) => {
                          setType(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </div>
                  <div style={{ marginLeft: "8vw" }}>
                    <h6 className="text-muted" style={{ fontSize: "12px" }}>
                      LOCATION
                    </h6>
                    <Form.Group controlId="formBasicSalary">
                      <Form.Control
                        className="p-0 border-0 shadow-none "
                        type="text"
                        placeholder="Location"
                        defaultValue={job.location}
                        onChange={(e) => {
                          setLocation(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </div>
                </div>

                <div>
                  <h6 className="text-muted" style={{ fontSize: "12px" }}>
                    EXPERIENCE
                  </h6>
                  <Form.Group controlId="formBasicSalary">
                    <Form.Control
                      className="p-0 border-0 mr-0 shadow-none ml-auto"
                      type="text"
                      placeholder="Experience"
                      defaultValue={job.experience}
                      onChange={(e) => {
                        setExperience(e.target.value);
                      }}
                    />
                  </Form.Group>
                </div>
              </Row>
              <Row className="m-3 w-100">
                <MyJobTech job={job} />
              </Row>
              <Row className="m-3 w-100 flex-column justify-content-center">
                <h6 className="text-muted" style={{ fontSize: "12px" }}>
                  DETAILS
                </h6>
                <div>
                  <h6 className="mt-3" style={{ fontSize: "20px" }}>
                    JOB DESCRIPTION
                  </h6>
                  <p className="mx-3">{job.description}</p>
                </div>
                <div className="mt-4">
                  <h6 className="mt-3" style={{ fontSize: "20px" }}>
                    We’ll ask you to
                  </h6>
                  <div className="ml-3">
                    {job.responsibilities.map((r) => {
                      return (
                        <p className="mb-1 d-flex align-items-center">
                          <CheckCircleIcon
                            className="mr-1"
                            style={{ color: "#564de5" }}
                          />
                          {r.responsibility}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-4">
                  <h6 className="mt-3" style={{ fontSize: "20px" }}>
                    Requirements
                  </h6>
                  <div className="ml-3">
                    {job.requirements.map((r) => {
                      return (
                        <p className="mb-1 d-flex align-items-center">
                          <CheckCircleIcon
                            className="mr-1"
                            style={{ color: "#564de5" }}
                          />
                          {r.requirement}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-4">
                  <h6 className="mt-3" style={{ fontSize: "20px" }}>
                    We offer
                  </h6>
                  <div className="ml-3">
                    {job.offers.map((r) => {
                      return (
                        <p className="mb-1 d-flex align-items-center">
                          <CheckCircleIcon
                            className="mr-1"
                            style={{ color: "#564de5" }}
                          />
                          {r.offer}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </Row>
            </Row>
          </Col>
          <Col className="col-for-map-and-apply p-0" md={4}>
            <Row className="col-2-for-map-main-div m-0 mb-2 mt-n1"></Row>
            <Row className="col-2-for-map-2nd-div m-0">
              <SingleJobMap />
            </Row>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default MyJob;
