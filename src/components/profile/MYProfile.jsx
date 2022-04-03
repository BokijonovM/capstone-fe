import React, { useState, useEffect } from "react";
import "./style.css";
import { Row, Col, Form, Modal } from "react-bootstrap";
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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PhoneIcon from "@mui/icons-material/Phone";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function MYProfile() {
  const userMe = useSelector((state) => state.userMe);
  const [firstName, setFirstName] = useState(userMe.firstName);
  const [lastName, setLastName] = useState(userMe.lastName);
  const [linkedIn, setLinkedIn] = useState(userMe.linkedin);
  const [gitHub, setGitHub] = useState(userMe.github);
  const [city, setCity] = useState(userMe.city);
  const [phoneNumber, setPhoneNumber] = useState(userMe.phoneNumber);
  const [aboutMe, setAboutMe] = useState(userMe.aboutMe);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [experience, setExperience] = useState(userMe.myExperience);
  const [selectedFile, setSelectedFile] = useState(null);
  const myToken = localStorage.getItem("MyToken");
  const dataJson = JSON.parse(JSON.stringify(myToken));
  // modal
  const [showAddEditPic, setShowAddEditPic] = useState(false);
  const handleCloseAddEditPic = () => setShowAddEditPic(false);
  const [editable, setEditable] = useState(true);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeExp = (event) => {
    setExperience(event.target.value);
  };

  const editMyInfo = async () => {
    // e.preventDefault();
    const newPost = {
      firstName: firstName,
      lastName: lastName,
      linkedin: linkedIn,
      github: gitHub,
      city: city,
      phoneNumber: phoneNumber,
      aboutMe: aboutMe,
      myExperience: experience,
    };
    try {
      let res = await fetch(`http://localhost:3001/users/me`, {
        method: "PUT",
        body: JSON.stringify(newPost),
        headers: {
          authorization: dataJson,
          "Content-type": "application/json",
        },
      });
      if (res.ok) {
        let data = await res.json();
        console.log("edited successfully", data);
        dispatch(setUserInfoAction(data));
      } else {
        console.log("error edit me");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    handleCloseAddEditPic();
    formData.append("image", selectedFile);

    const newImage = {
      image: selectedFile,
    };

    try {
      let response = await fetch("http://localhost:3001/users/me/image", {
        method: "POST",
        body: formData,
        headers: {
          authorization: dataJson,
        },
      });

      if (response.ok) {
        let data = await response.json();
        console.log("successfully Uploaded", data);
        dispatch(setUserInfoAction(data));
        // fetchProfile();
      } else {
        console.log("error on uploading");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

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
            <div className="d-flex edit-image-main-div justify-content-center mb-4">
              <img
                className="edit-user-image"
                src={userMe.image}
                alt="mine"
                onClick={(e) => {
                  editable && setShowAddEditPic(true);
                }}
              />
              <CameraAltIcon fontSize="large" className="edit-icon-image" />
            </div>

            <div className="user-info-text-fields-main-div">
              <div className="d-flex align-items-center justify-content-between">
                <TextField
                  className="w-100 user-info-text-fields mr-1"
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
                  className="w-100 user-info-text-fields ml-1"
                  id="outlined-basic"
                  defaultValue={userMe.lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  label="Last name"
                  variant="outlined"
                  size="small"
                />
              </div>
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
                onChange={(e) => {
                  setAboutMe(e.target.value);
                }}
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
              <TextField
                className="w-100 user-info-text-fields mt-4"
                id="outlined-basic"
                defaultValue={userMe.phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
                label="Phone number"
                variant="outlined"
                size="small"
              />
              <FormControl className="mt-4" size="small" fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Experience
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={experience}
                  label="Experience"
                  defaultValue={userMe.myExperience}
                  size="small"
                  onChange={handleChangeExp}
                >
                  <MenuItem value={"0-2"}>0-2 years</MenuItem>
                  <MenuItem value={"2-4"}>2-4 years</MenuItem>
                  <MenuItem value={"4-6"}>4-6 years</MenuItem>
                  <MenuItem value={"6+"}>6+ years</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="upload-cv-main-div"></div>
            <div className="d-flex justify-content-between mt-3">
              <Button
                className="delete-profile-btn"
                color="error"
                variant="contained"
              >
                <DeleteIcon className="mr-2 ml-n2" />
                Delete
              </Button>
              <Button
                className="save-changes-btn"
                variant="contained"
                // onClick={handleOpen}
                onClick={() => editMyInfo()}
              >
                <SaveIcon className="mr-2 ml-n2" />
                Save changes
              </Button>
            </div>
          </div>
        </div>
      </Row>
      <div className="row-for-my-resume-main-div"></div>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-profile-view-cv">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            <h5>lorem45</h5>
          </Typography>
        </Box>
      </Modal>
      <Modal
        show={showAddEditPic}
        onHide={handleCloseAddEditPic}
        animation={true}
        className="w-100 edit-image-modal"
      >
        <Modal.Dialog className="w-100 border-0 px-3">
          <Modal.Body>
            <div className="d-flex justify-content-between justify-content-center  align-items-center">
              <div>
                <input
                  type="file"
                  id="photo"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <Button
                variant="contained"
                component="span"
                onClick={(e) => handleUpload(e)}
              >
                Upload
              </Button>
            </div>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}

export default MYProfile;
