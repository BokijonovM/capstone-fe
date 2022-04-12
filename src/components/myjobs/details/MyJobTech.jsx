import React from "react";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

function MyJobTech({ job }) {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip._id !== chipToDelete._id)
    );
  };
  return (
    <div>
      <h6 className="text-muted" style={{ fontSize: "12px" }}>
        TECHNOLOGIES
      </h6>
      <div className="d-flex align-items-center">
        {job.techStack.length !== 0 ? (
          job.techStack.map((j) => {
            return (
              <Tooltip title={j.skill} placement="top">
                <h6 className="singe-job-all-skills">{j.skill}</h6>
              </Tooltip>
            );
          })
        ) : (
          <h6 className="">
            <RemoveCircleRoundedIcon style={{ color: "#564de5" }} />
          </h6>
        )}
      </div>
      <div>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            listStyle: "none",
            p: 0.5,
            m: 0,
          }}
          component="ul"
        >
          {job.techStack.map((data) => {
            let icon;

            return (
              <ListItem key={data._id}>
                <Chip
                  icon={icon}
                  label={data.skill}
                  onDelete={handleDelete(data)}
                />
              </ListItem>
            );
          })}
        </Paper>
      </div>
    </div>
  );
}

export default MyJobTech;
