import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleCompany() {
  const [company, setCompany] = useState(null);
  const params = useParams();
  const fetchComp = async () => {
    try {
      let res = await fetch(
        `${process.env.REACT_APP_API_MAIN_URL}/companies/${params.id}`
      );
      if (res.ok) {
        let data = await res.json();
        console.log(data);
        setCompany(data);
      } else {
        console.log("fetch error single company");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchComp();
  }, []);
  return <div>SingleCompany</div>;
}

export default SingleCompany;
