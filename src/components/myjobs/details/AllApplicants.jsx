import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Applicant from "./Applicant";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
      } else {
        console.log("fetch applicants error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    fetchApp();
  }, []);
  return (
    <div className={applicants.length > 0 ? "w-100 mx-4" : "d-none"}>
      <div className="px-3 mt-4 mb-3 d-flex justify-content-between w-100 align-items-center">
        <h4 className={applicants.length === 1 ? "d-none" : ""}>
          All applicants
        </h4>


      </div>
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
