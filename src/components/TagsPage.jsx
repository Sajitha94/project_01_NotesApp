import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Box from "@mui/material/Box";
import { useNotes } from "./LocalStorageData";

function TagsPage() {
  const { tagsData, setSearchTerm, searchTerm } = useNotes();
  const chipArr = ["All", ...tagsData];

  const handleClick = (chip) => {
    if (chip === "All") {
      setSearchTerm("");
    } else {
      setSearchTerm(chip);
    }
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
      <Box sx={{ width: "100%", minWidth: 0 }} className="overflow-x-auto">
        <Stack
          direction="row"
          spacing={1}
          sx={{
            overflowX: "auto",
            py: 2,
            scrollbarWidth: "none",
          }}
        >
          {chipArr.map((chip) => {
            const isActive =
              (chip === "All" && searchTerm === "") ||
              chip.toLowerCase() === searchTerm.toLowerCase();

            return (
              <Chip
                label={chip === "All" ? `${chip}` : `#${chip}`}
                key={chip}
                variant="outlined"
                onClick={() => handleClick(chip)}
                sx={{
                  backgroundColor: isActive ? "#946bdc" : "#ede7f6",
                  color: isActive ? "white" : "#5e35b1",
                  padding: "5px 5px",
                  cursor: "pointer",
                  ":hover": {
                    backgroundColor: isActive
                      ? "#7e57c2  !important"
                      : "#d1c4e9  !important",
                  },
                }}
              />
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}

export default TagsPage;
