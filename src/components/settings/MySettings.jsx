import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import BusinessIcon from "@mui/icons-material/Business";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import { useNavigate } from "react-router-dom";

function MySettings() {
  const navigate = useNavigate();
  return (
    <div>
      <Row>
        <div className="profile-col-1 mr-0 pr-0 pt-3 pb-5">
          <div className="image-cont-div">
            <img
              className="user-image-profile"
              src="https://images.unsplash.com/photo-1648330197078-c6742e61d227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
              alt="profile"
            />
            <h6 className="mb-0 mt-2 welcome-text">Welcome</h6>
            <h6 className="mb-0 username-h6-tag">username</h6>
          </div>
          <Button
            onClick={() => navigate("/profile")}
            className="my-profile-btn-1 py-3 mt-4"
            size="medium"
          >
            <PersonOutlineOutlinedIcon className="all-icons-mr-3-meeded" />
            <span className="span-sidebar-for-all-profile">My Profile</span>
          </Button>
          <Button
            onClick={() => navigate("/my-jobs")}
            className="my-profile-btn-1 py-3"
            size="medium"
          >
            <WorkOutlineOutlinedIcon className="all-icons-mr-3-meeded" />
            <span className="span-sidebar-for-all-profile">My Jobs</span>
          </Button>
          <Button
            onClick={() => navigate("/settings")}
            className="my-profile-btn py-3"
            size="medium"
          >
            <SettingsOutlinedIcon className="all-icons-mr-3-meeded" />
            <span className="span-sidebar-for-all-profile"> Settings</span>
          </Button>
          <Button
            onClick={() => navigate("/companies")}
            className="my-profile-btn-1 py-3"
            size="medium"
          >
            <BusinessIcon className="all-icons-mr-3-meeded" />
            <span className="span-sidebar-for-all-profile">Companies</span>
          </Button>
          <Button
            onClick={() => navigate("/messages")}
            className="my-profile-btn-1 py-3"
            size="medium"
          >
            <ForumOutlinedIcon className="all-icons-mr-3-meeded" />
            <span className="span-sidebar-for-all-profile">Messages</span>
          </Button>
          <Button
            className="my-profile-btn-1 py-3"
            size="medium"
            onClick={() => {
              localStorage.removeItem("MyToken");
              window.location.href = "/profile";
            }}
          >
            <PowerSettingsNewOutlinedIcon className="all-icons-mr-3-meeded" />
            <span className="span-sidebar-for-all-profile">Sign out</span>
          </Button>
        </div>
        <div>Col2</div>
        <div>Col3</div>
      </Row>
    </div>
  );
}

export default MySettings;
