import React from "react";
import { Row, Col } from "react-bootstrap";
import PostJob from "./PostJob";

function JobPostMain() {
  return (
    <div>
      <div className="d-flex justify-content-center my-2">
        <PostJob />
      </div>
    </div>
  );
}

export default JobPostMain;
