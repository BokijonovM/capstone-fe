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
import "./col2.css";
import "./col3.css";
import { useDispatch, useSelector } from "react-redux";

function MYProfile() {
  const dispatch = useDispatch();
  const userMe = useSelector((state) => state.userMe);
  const navigate = useNavigate();
  return (
    <div>
      <Row className="row-1-main-place">
        <div className="profile-col-1 mr-0 pr-0 pt-3 pb-5">
          <div className="image-cont-div">
            <img
              className="user-image-profile"
              src={userMe.image}
              alt="profile"
            />
            <h6 className="mb-0 mt-2 welcome-text">Welcome</h6>
            <h6 className="mb-0 username-h6-tag">{userMe.firstName}</h6>
          </div>
          <Button
            onClick={() => navigate("/profile")}
            className="my-profile-btn py-3 mt-4"
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
            className="my-profile-btn-1 py-3"
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
              window.location.href = "/";
            }}
          >
            <PowerSettingsNewOutlinedIcon className="all-icons-mr-3-meeded" />
            <span className="span-sidebar-for-all-profile">Sign out</span>
          </Button>
        </div>
        <div className="profile-col-2">
          <div className="col-2-1st-div"></div>
        </div>
        <div className="profile-col-3">
          <div className="col-3-1st-div"></div>
        </div>
      </Row>
      <Row className="row-2-bottom-bar">
        <Button
          onClick={() => navigate("/profile")}
          className="my-profile-bottom-btn"
          size="medium"
        >
          <PersonOutlineOutlinedIcon className="" />
        </Button>
        <Button
          onClick={() => navigate("/messages")}
          className="my-profile-bottom-btn-1"
          size="medium"
        >
          <ForumOutlinedIcon className="" />
        </Button>

        <Button
          onClick={() => navigate("/companies")}
          className="my-profile-bottom-btn-1"
          size="medium"
        >
          <BusinessIcon className="" />
        </Button>
        <Button
          onClick={() => navigate("/my-jobs")}
          className="my-profile-bottom-btn-1"
          size="medium"
        >
          <WorkOutlineOutlinedIcon className="" />
        </Button>
      </Row>
    </div>
  );
}

export default MYProfile;
