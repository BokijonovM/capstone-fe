import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Applicant from "./Applicant";

function AllApplicants({ job }) {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [applicants, setApplicants] = useState([]);

  const fetchApp = async () => {
    try {
      let res = await fetch(
        `${process.env.REACT_APP_API_MAIN_URL}/jobs/${job}/applicants`
      );
      if (res.ok) {
        let data = await res.json();
        setApplicants(data);
        setIsLoading(false);
        console.log("apppp", data);
      } else {
        console.log("fetch applicants error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApp();
  }, []);
  return (
    <div className="w-100 mx-4">
      <h4 className={applicants.length === 1 ? "d-none" : "pl-3 mt-4 mb-3"}>
        All applicants
      </h4>
      {isLoading ? (
        ""
      ) : (
        <Row className="m-0 w-100" sm={1} md={2} lg={4}>
          {applicants.map((a) => {
            return (
              <Col className="w-100 px-1" key={a._id}>
                <Applicant userId={a.applicant} />
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
}

export default AllApplicants;
