import React from "react";
import "./home.css";
import earthImage from "../assets/earth.png";
import AllJobs from "../myjobs/AllJobs";

function MyMain() {
  return (
    <div className="may-main">
      <div className="main-page-first-page-main-div mx-4">
        <div className="first-page-some-text-cont mt-n5">
          <h3>Welcome</h3>
        </div>
      </div>
      <AllJobs />
    </div>
  );
}

export default MyMain;
