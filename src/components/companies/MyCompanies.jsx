import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import JobLength from "./JobLength";

function MyCompanies() {
  const [myCompanies, setMyCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const myToken = localStorage.getItem("MyToken");
  const dataJson = JSON.parse(JSON.stringify(myToken));
  const fetchMyCompanies = async () => {
    try {
      let res = await fetch(
        `${process.env.REACT_APP_API_MAIN_URL}/users/me/companies`,
        {
          headers: {
            authorization: dataJson,
          },
        }
      );
      if (res.ok) {
        let data = await res.json();
        console.log(data);
        setMyCompanies(data);
        setIsLoading(false);
      } else {
        console.log("fetch error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyCompanies();
  }, []);
  return (
    <div>
      <Row xs={1} md={2} className="g-4 m-3">
        {isLoading
          ? ""
          : myCompanies.map((c) => {
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

                          <JobLength name={c.name} />
                        </div>
                      </div>
                    </Card.Body>
                    <div className="class-div-card-hover-text">
                      <div className="card-hover-child-div">
                        <h5 className="mb-0 text-light">{c.name}</h5>
                        <Button
                          className="mt-3 text-light show-comp-details-btn"
                          variant="contained"
                        >
                          SHOW DETAILS
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Col>
              );
            })}
      </Row>
    </div>
  );
}

export default MyCompanies;
