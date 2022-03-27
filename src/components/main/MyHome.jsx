import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./home.css";
import { useQueryParameter } from "../hooks/index.js";

function MyHome() {
  const token =
    useQueryParameter({ defaultValue: null, key: "accessToken" }) ||
    localStorage.getItem("MyToken");

  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState();
  const [authorized, setAuthorized] = useState();

  useEffect(() => {
    console.log(location.pathname);
    if (token) {
      localStorage.setItem("MyToken", token);
      setTimeout(() => setAuthorized(true), 200);
    } else {
      setTimeout(() => {
        if (localStorage.getItem("MyToken")) {
          window.location.href = "/";
        }
      }, 10);
    }
  });
  return (
    <div className="login-home-main-div">
      <h1>Welcome home</h1>
    </div>
  );
}

export default MyHome;
