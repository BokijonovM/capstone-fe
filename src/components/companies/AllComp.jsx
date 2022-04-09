import React, { useState, useEffect } from "react";
import { Row, Card, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import OtherLoader from "../loader/OtherLoader";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { setCompaniesAction } from "../../redux/action/index";
import JobLength from "./JobLength";
import TextField from "@mui/material/TextField";

function AllComp() {
  const dispatch = useDispatch();
  const userMe = useSelector((state) => state.userMe);
  const allCompanies = useSelector((state) => state.companies);
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [compName, setCompName] = useState("");
  const navigate = useNavigate();
  const fetchCompanies = async () => {
    try {
      let res = await fetch(`${process.env.REACT_APP_API_MAIN_URL}/companies`);
      if (res.ok) {
        let data = await res.json();
        console.log(data.total.companies);
        setCompanies(data.total.companies);
        setIsLoading(false);
      } else {
        console.log("fetch companies error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);
  return (
    <div>
      <div className="search-fields-main-div-1 ml-3">
        <TextField
          id="outlined-basic"
          label="Company"
          variant="outlined"
          size="small"
          onChange={(e) => setCompName(e.target.value)}
        />
      </div>
      {isLoading
        ? ""
        : companies
            .filter((value) => {
              if (compName === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(compName.toLowerCase())
              ) {
                return value;
              }
            })
            .map((c) => {
              return (
                <Col key={c._id}>
                  <Card className=" my-2 companies-main-card">
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
                          <h6 className="mb-0">
                            <JobLength name={c.name} />
                          </h6>
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
            })}
    </div>
  );
}

export default AllComp;
