import React, { useState, useEffect } from "react";
import { Row, Card, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import BusinessIcon from "@mui/icons-material/Business";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { setCompaniesAction } from "../../redux/action/index";
import MyLoader from "../MyLoader";

function AllCompanies() {
  const dispatch = useDispatch();
  const userMe = useSelector((state) => state.userMe);
  const allCompanies = useSelector((state) => state.companies);
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const fetchCompanies = async () => {
    try {
      let res = await fetch("http://localhost:3001/companies");
      if (res.ok) {
        let data = await res.json();
        console.log(data.total.companies);
        setCompanies(data.total.companies);
        setIsLoading(false);
        dispatch(setCompaniesAction(data.total.companies));
      } else {
        console.log("fetch companies error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCompanies();
    console.log(allCompanies);
  }, []);
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
            className="my-profile-btn-1 py-3"
            size="medium"
          >
            <SettingsOutlinedIcon className="all-icons-mr-3-meeded" />
            <span className="span-sidebar-for-all-profile"> Settings</span>
          </Button>
          <Button
            onClick={() => navigate("/companies")}
            className="my-profile-btn py-3"
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
        <div className="profile-col-2-companies">
          <div className="mx-4">
            <Row className="w-100 m-0 p-0">
              <Button
                className="ml-auto mt-3"
                variant="outlined"
                style={{
                  borderColor: "rgb(86, 77, 229)",
                  color: "rgb(86, 77, 229)",
                }}
                onClick={() => navigate("/add-companies")}
              >
                ADD COMPANY
              </Button>
              <Button
                className="ml-2 mt-3"
                style={{ backgroundColor: "rgb(86, 77, 229)" }}
                variant="contained"
                onClick={() => navigate("/my-companies")}
              >
                MY COMPANIES
              </Button>
            </Row>
            <Row xs={1} md={2} className="g-4 my-3">
              {isLoading ? (
                <MyLoader />
              ) : (
                companies.map((c) => {
                  return (
                    <Col key={c._id}>
                      <Card className="my-2 companies-main-card">
                        <Card.Img
                          variant="top"
                          className="card-comp-image-banner"
                          src={c.banner}
                        />
                        <Card.Body>
                          <div className="d-flex justify-content-between align-items-center">
                            <Avatar
                              className="company-cover-image"
                              alt={c.name}
                              src={c.cover}
                            />

                            <div>
                              <h6
                                className="mb-0 text-muted"
                                style={{ fontSize: "10px" }}
                              >
                                JOB OFFERS
                              </h6>
                              <h6 className="mb-0">0</h6>
                            </div>
                          </div>
                        </Card.Body>
                        <div className="class-div-card-hover-text">
                          <div className="card-hover-child-div">
                            <h5 className="mb-0 text-light">{c.name}</h5>
                            <Button
                              className="mt-3 text-light show-comp-details-btn"
                              variant="contained"
                              onClick={() => navigate(`/companies/${c._id}`)}
                            >
                              SHOW DETAILS
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  );
                })
              )}
            </Row>
          </div>
        </div>
      </Row>
      <Row className="row-2-bottom-bar">
        <Button
          onClick={() => navigate("/profile")}
          className="my-profile-bottom-btn-1"
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
          className="my-profile-bottom-btn"
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

export default AllCompanies;
