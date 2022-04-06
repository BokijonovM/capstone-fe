import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ItemOne from "./ItemOne";
import ItemTwo from "./ItemTwo";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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
        console.log("uuuuuu", data);
        setCompany(data);
      } else {
        console.log("fetch error single company");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetchComp();
  }, []);
  return (
    <div className="w-100">
      <Box
        className="d-flex justify-content-center flex-column align-items-center"
        sx={{ width: "100%" }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            className="w-100"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              style={{ width: "50vw" }}
              label="Company info"
              {...a11yProps(0)}
            />
            <Tab style={{ width: "50vw" }} label="All jobs" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ItemOne company={company} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ItemTwo company={company} />
        </TabPanel>
      </Box>
    </div>
  );
}

export default SingleCompany;
