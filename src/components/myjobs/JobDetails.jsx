import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfoAction } from "../../redux/action";
import MyJob from "./details/MyJob";
import SingleJob from "./details/SingleJob";

function JobDetails() {
  const params = useParams();
  const [job, setJob] = useState(null);
  const [isMyJob, setIsMyJob] = useState(false);
  const userMe = useSelector((state) => state.userMe);
  const fetchJob = async () => {
    try {
      let res = await fetch(
        `${process.env.REACT_APP_API_MAIN_URL}/jobs/${params.id}`
      );
      if (res.ok) {
        let data = await res.json();
        setJob(data);
        console.log("job", data);
        if (userMe._id === data.user._id) {
          setIsMyJob(true);
          console.log("it is my job");
        }
      } else {
        console.log("fetch error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJob();
  }, []);
  return (
    <div className="m-0 p-0 w-100">{isMyJob ? <MyJob /> : <SingleJob />}</div>
  );
}

export default JobDetails;
