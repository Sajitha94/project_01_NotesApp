import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Box from "@mui/material/Box";
import { useNotes } from "./LocalStorageData";

function TagsPage() {
  const { tagsData, setTagsData } = useNotes();
  console.log(tagsData, "tagsData111");
  const chipArr = ["All", ...tagsData];

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  return (
    <Box className="flex flex-col justify-between items-start mx-4">
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          color: "#5e35b1",
          fontWeight: "bold",
          fontSize: { xs: "16px", sm: "25px" },
        }}
      >
        Tags
      </Typography>
      <Stack direction="row" spacing={1} sx={{ overflowX: "auto", py: 2 }}>
        {chipArr.map((chip) => (
          <Chip
            label={`#${chip}`}
            key={chip}
            variant="outlined"
            onClick={handleClick}
            sx={{
              backgroundColor: chip === "All" ? "#946bdc" : "#ede7f6",
              color: chip === "All" ? "white" : "#5e35b1",
              padding: "5px 5px",
              cursor: "pointer",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default TagsPage;
