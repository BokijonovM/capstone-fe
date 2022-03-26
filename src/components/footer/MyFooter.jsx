import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "./style.css";

function MyFooter() {
  return (
    <div className="footer-div">
      Created By{" "}
      <a
        className=" mx-1 d-flex align-items-center"
        style={{ textDecoration: "none" }}
        href="/"
      >
        {" "}
        Bokijonov Mukhsinjon{" "}
      </a>
      | 2022 All rights reserved.
    </div>
  );
}

export default MyFooter;
