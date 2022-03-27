import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "./style.css";

function MyFooter() {
  return (
    <div className="footer-div px-3">
      <span>
        Created By{" "}
        <a href="https://www.linkedin.com/in/bokijonov/">
          Bokijonov Mukhsinjon
        </a>{" "}
        |{" "}
        <span>
          <CopyrightIcon style={{ marginBottom: "2px" }} fontSize="small" />
        </span>{" "}
        2022 All rights reserved.
      </span>
    </div>
  );
}

export default MyFooter;
