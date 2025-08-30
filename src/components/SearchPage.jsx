import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import DialogPage from "./DialogPage";
import { useNotes } from "./LocalStorageData";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "67%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

function SearchPage() {
  const {
    handleClickOpen,
    activeTag,
    setActiveTag,
    searchTerm,
    setSearchTerm,
  } = useNotes();
  const buttons = ["Notes", "Archived", "Trash"];

  const searchClick = (btn) => {
    setSearchTerm("");
    setActiveTag(btn);
  };

  return (
    <Box className="flex justify-between items-center md:mx-4  md:flex-row flex-col">
      <Box className="flex justify-end items-center py-4 gap-4 order-2 md:order-1">
        {buttons.map((btn) => (
          <Button
            key={btn}
            variant="contained"
            onClick={() => searchClick(btn)}
            sx={{
              backgroundColor: activeTag === btn ? "#7e57c2" : "#ede7f6",
              textTransform: "none",
              color: activeTag === btn ? "#fff" : "#7e57c2",
              ":hover": {
                backgroundColor:
                  activeTag === btn
                    ? "#7e57c2  !important"
                    : "#d1c4e9  !important",
              },
            }}
          >
            {btn}
          </Button>
        ))}
      </Box>

      <Box className="flex justify-between items-center py-4  order-1 md:order-2">
        <Search sx={{ border: "2px solid #b39ddb", borderRadius: "10px" }}>
          <SearchIconWrapper className="justify-between">
            <SearchIcon className="text-[#7e57c2]" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            sx={{ color: "#7e57c2" }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Search>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#7e57c2", padding: "5px 5px" }}
          onClick={handleClickOpen}
        >
          ADD NEW
        </Button>
      </Box>

      <DialogPage />
    </Box>
  );
}

export default SearchPage;
