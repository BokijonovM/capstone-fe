import React from "react";
import { Row, Col } from "react-bootstrap";
import CompDetails from "./CompDetails";
import PostJob from "./PostJob";

function JobPostMain() {
  return (
    <div>
      <div className="d-flex justify-content-center my-2">
        <Row className="w-100 m-0 p-0">
          <Col className='' md={9}>
            <PostJob />
          </Col>
          <Col className='' md={3}>
            <CompDetails />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default JobPostMain;
