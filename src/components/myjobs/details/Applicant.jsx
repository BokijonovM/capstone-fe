import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Tooltip from "@mui/material/Tooltip";

function Applicant({ userId }) {
  console.log(userId);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const myToken = localStorage.getItem("MyToken");
  const dataJson = JSON.parse(JSON.stringify(myToken));

  const fetchUser = async () => {
    try {
      let res = await fetch(
        `${process.env.REACT_APP_API_MAIN_URL}/users/${userId}`,
        {
          headers: {
            authorization: dataJson,
          },
        }
      );
      if (res.ok) {
        let data = await res.json();
        setUser(data);
        console.log("data user", data);
        setIsLoading(false);
      } else {
        console.log("fetch user error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="w-100">
      {isLoading ? (
        ""
      ) : (
        <div className="w-100">
          <div className="d-flex align-items-center w-100 applicant-user-div py-2 px-3">
            <Avatar alt={user.firstName} src="/static/images/avatar/1.jpg" />
            <h6 className="mb-0 ml-2">{user.firstName}</h6>
            <Tooltip title="View" placement="top">
              <VisibilityIcon className="ml-auto quick-view-applicant" />
            </Tooltip>
          </div>
        </div>
      )}
    </div>
  );
}

export default Applicant;
