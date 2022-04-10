import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import SingleJobMap from "../../myMap/SingleJobMap";
import CompImage from "./CompImage";
import Button from "@mui/material/Button";

function SingleJob({ job }) {
  return (
    <div className="w-100 p-0 m-0">
      <Row className="m-3 p-0" sm={1} md={2}>
        <Col className="p-0" md={9}>
          <Row className="job-title-comp-info-row m-0">
            <Row className="w-100 m-3 align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <CompImage job={job.companyName} />
                <div className="ml-2">
                  <h2 className="job-details-hob-title">{job.title}</h2>
                  <h6 className="job-details-hob-company-name">
                    {job.companyName}
                  </h6>
                  <h6 className="mb-0 text-muted" style={{ fontSize: "12px" }}>
                    SALARY
                  </h6>
                  <h6 style={{ fontSize: "17px" }}>${job.salary}</h6>
                </div>
              </div>
              <Button className="apply-job-apply-btn" variant="contained">
                APPLY
              </Button>
            </Row>
            <Row className="m-3 w-100 bg-danger justify-content-between">
              <div>
                <h6>EMPLOYMENT TYPE</h6>
                <h6>{job.type}</h6>
              </div>
              <div>
                <h6>LOCATION</h6>
                <h6>{job.location}</h6>
              </div>
              <div>
                <h6>EXPERIENCE</h6>
                <h6>{job.experience}</h6>
              </div>
            </Row>
          </Row>
        </Col>
        <Col className="col-for-map-and-apply p-0" md={3}>
          <Row className="col-2-for-map-main-div m-0"></Row>
          <Row className="col-2-for-map-2nd-div m-0"></Row>
        </Col>
      </Row>
    </div>
  );
}

export default SingleJob;
