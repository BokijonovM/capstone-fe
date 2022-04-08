import React from "react";
import "./home.css";
import earthImage from "../assets/earth.png";
import AllJobs from "../myjobs/AllJobs";
import { Row, Col } from "react-bootstrap";
import AllComp from "../companies/AllComp";

function MyMain() {
  return (
    <div className="may-main">
      <div className="main-page-first-page-main-div mx-4">
        <div className="first-page-some-text-cont mt-n4 ">
          <h1>Career matching platform for IT</h1>
          <h6>
            JOBLAND - recruitment platform for Tech industry, basing on reverse
            model of a job board. As a candidate, you create an anonymous,
            technical profile, indicate expectations when changing job, and
            companies submit you tailored-made offers.
          </h6>
        </div>
      </div>
      <Row className="m-0 p-0" sm={1} md={2}>
        <Col md={8}>
          <AllJobs />
        </Col>
        <Col className="p-0" md={4}>
          <AllComp />
        </Col>
      </Row>
    </div>
  );
}

export default MyMain;

// <div className="">
//   <h5>JOBS ON THE PLATFORM</h5>
//   <h4>44</h4>
// </div>
