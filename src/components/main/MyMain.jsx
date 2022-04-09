import React, { useState } from "react";
import "./home.css";
import earthImage from "../assets/earth.png";
import AllJobs from "../myjobs/AllJobs";
import { Row, Col } from "react-bootstrap";
import AllComp from "../companies/AllComp";
import MyMap from "../myMap/MyMap";

function MyMain() {
  const [isMap, setIsMap] = useState(false);
  return (
    <div className="may-main mt-3">
      <Row className="m-0 p-0" sm={1} md={2}>
        <Col className="" md={7}>
          <AllJobs setIsMap={setIsMap} />
        </Col>
        <Col className="" md={5}>
          {isMap ? (
            <div className="my-map-main-div-1 w-100 mr-3">
              <MyMap />
            </div>
          ) : (
            <AllComp />
          )}
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

// <div className="main-page-first-page-main-div mx-4">
//   <div className="first-page-some-text-cont mt-n4 ">
//     <h1>Career matching platform for IT</h1>
//     <h6>
//       JOBLAND - recruitment platform for Tech industry, basing on reverse
//       model of a job board. As a candidate, you create an anonymous,
//       technical profile, indicate expectations when changing job, and
//       companies submit you tailored-made offers.
//     </h6>
//   </div>
// </div>
