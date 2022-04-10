import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfoAction } from "../../redux/action";

function ExtraNavbar() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const myToken = localStorage.getItem("MyToken");
  const dataJson = JSON.parse(JSON.stringify(myToken));
  const userMe = useSelector((state) => state.userMe);

  useEffect(() => {
    if (dataJson) {
      setIsLoggedIn(true);
      console.log(dataJson);
    }
  }, []);

  return (
    <div className="extra-navbar">
      <div className="extra-header-2nd-div">ExtraNavbar</div>
    </div>
  );
}

export default ExtraNavbar;
