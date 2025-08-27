import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "50%",
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
    [theme.breakpoints.up("xs")]: {
      width: "10ch",
    },
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
    },
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));

export default function HeaderPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#ede7f6" }}>
        <Toolbar
          sx={{
            display: "flex",
            gap: { xs: "2rem", sm: "8rem", md: "12rem", lg: "23rem" },
          }}
        >
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
            NotesApp
          </Typography>
          {/* <Search sx={{ border: "2px solid #b39ddb", borderRadius: "10px" }}>
            <SearchIconWrapper className="justify-between">
              <SearchIcon className="text-[#7e57c2]" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ color: "#7e57c2" }}
            />
          </Search> */}
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
