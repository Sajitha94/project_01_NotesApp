import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function CardPage() {
  const cardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const buttonsActions = ["Edit", "Archive", "Trash"];
  const chipArr = ["#personal", "#work", "#office"];
  return (
    <Box className="flex contain-content justify-center items-center mx-5 gap-5  flex-wrap ">
      {cardArr.map((card) => (
        <Card sx={{ maxWidth: 275, borderRadius: 2, boxShadow: 3 }} key={card}>
          <CardContent className="flex justify-between items-center flex-col">
            <Box className="flex justify-between items-center  gap-5 mb-1">
              <Typography
                gutterBottom
                sx={{
                  color: "black",
                  fontSize: 16,
                  fontWeight: 600,
                  marginBottom: 0,
                }}
              >
                Welcome to Notes
              </Typography>
              <Box className="flex justify-end items-center gap-2 ">
                <Box> 📍</Box>
                {/* "📌" :  */}
                <Box>➤</Box>
              </Box>
            </Box>
            <Box className="flex justify-between ">
              <Typography
                sx={{
                  color: "text.secondary",
                  mb: 1.5,
                  wordWrap: "break-word",
                }}
              >
                This is an example note. Use the + button to create notes, add
                tags (comma) and save them. Click on the tags to filter notes.
              </Typography>
              <Box className="flex  flex-col justify-start items-center gap-1 text-sm text-gray-500">
                <Box>28/8/2025,</Box>
                <Box>1:16:30am</Box>
              </Box>
            </Box>

            <Stack direction="row" spacing={1}>
              {chipArr.map((chip, idx) => (
                <Chip label={chip} key={idx} />
              ))}
            </Stack>
          </CardContent>
          <CardActions className="flex justify-around items-center px-2 pb-2">
            {buttonsActions.map((btn, idx) => (
              <Button
                variant="outlined"
                key={idx}
                sx={{
                  textTransform: "none",
                  color: btn === "Trash" ? "red" : "#9575cd",
                  borderColor: "#d1c4e9",
                }}
              >
                {btn}
              </Button>
            ))}
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}

export default CardPage;
