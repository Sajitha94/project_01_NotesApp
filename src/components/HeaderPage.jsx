import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
