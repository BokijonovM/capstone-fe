import React, { useState, useEffect } from "react";
import "./style.css";
import { Row, Col, Form } from "react-bootstrap";
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
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import TextField from "@mui/material/TextField";
import { setUserInfoAction } from "../../redux/action";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function MYProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [city, setCity] = useState("");
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
          <div className="p-3 col-2-1st-div">
            <div className="d-flex pb-3  justify-content-between w-100 align-items-center">
              <h6 className="mb-0">USER DETAILS</h6>
            </div>
            <div className="d-flex edit-image-main-div justify-content-center mb-5">
              <img className="edit-user-image" src={userMe.image} alt="mine" />
              <CameraAltIcon fontSize="large" className="edit-icon-image" />
            </div>
            <div className="user-info-text-fields-main-div">
              <TextField
                className="w-100 user-info-text-fields"
                id="outlined-basic"
                defaultValue={userMe.firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                label="First name"
                variant="outlined"
                size="small"
              />
              <TextField
                className="w-100 user-info-text-fields mt-4"
                id="outlined-basic"
                defaultValue={userMe.lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                label="Last name"
                variant="outlined"
                size="small"
              />
              <TextField
                className="w-100 user-info-text-fields mt-4"
                id="outlined-basic"
                defaultValue={userMe.city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                label="City"
                variant="outlined"
                size="small"
              />
              <TextField
                className="w-100 user-info-text-fields mt-4"
                id="outlined-multiline-static"
                label="About me"
                defaultValue={userMe.aboutMe}
                // onChange={(e) => {
                //   setCity(e.target.value);
                // }}
                multiline
                rows={6}
                variant="outlined"
              />
            </div>
          </div>
        </div>
        <div className="profile-col-3">
          <div className="col-3-1st-div p-3">
            <div className="d-flex pb-3  justify-content-between w-100 align-items-center">
              <h6 className="mb-0">UPLOAD CV</h6>
            </div>
            <div>
              <TextField
                className="w-100 user-info-text-fields mt-3"
                id="outlined-basic"
                defaultValue={userMe.linkedin}
                onChange={(e) => {
                  setLinkedIn(e.target.value);
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LinkedInIcon />
                    </InputAdornment>
                  ),
                }}
                label="LinkedIn"
                variant="outlined"
                size="small"
              />
              <TextField
                className="w-100 user-info-text-fields mt-4"
                id="outlined-basic"
                defaultValue={userMe.github}
                onChange={(e) => {
                  setGitHub(e.target.value);
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <GitHubIcon />
                    </InputAdornment>
                  ),
                }}
                label="GitHub"
                variant="outlined"
                size="small"
              />
            </div>
            <div className="upload-cv-main-div"></div>
          </div>
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
