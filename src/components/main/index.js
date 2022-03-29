import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useQueryParameter = ({ defaultValue, key }) => {
  const [parameter, setParameter] = useState(defaultValue);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get(key)) {
      setParameter(params.get(key));
      console.log(params);
    }
  }, [window.location.search]);

  return parameter;
};
