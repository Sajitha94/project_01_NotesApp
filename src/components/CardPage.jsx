import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useNotes } from "./LocalStorageData";

function CardPage() {
  const { notes, setNotes, handleClickOpen, handleClose, open, activeTag } =
    useNotes();

  const buttonsActions = ["Edit", "Archive", "Trash"];

  // pinned,
  //         archived,
  //         trashed,
  let filteredNotes = [];
  if (activeTag === "Archived") {
    filteredNotes = notes.filter(
      (item) => item.archived === true && item.trashed === false
    );
  } else if (activeTag === "Trash") {
    filteredNotes = notes.filter((item) => item.trashed === true);
  } else {
    filteredNotes = notes.filter(
      (item) => item.archived === false && item.trashed === false
    );
  }

  const ButtonOnclick = (btn, id) => {
    if (btn === "Edit") {
      handleClickOpen(id);
    } else if (btn === "Archive") {
      const archiveData = notes.map((item) =>
        item.id === id ? { ...item, archived: true, trashed: false } : item
      );
      setNotes(archiveData);
    } else if (btn === "Trash") {
      const trashData = notes.map((items) =>
        items.id === id ? { ...items, trashed: true, archived: false } : items
      );
      setNotes(trashData);
    }
  };
  console.log(notes, "notes");
  return (
    <Box className="flex contain-content justify-center items-center mx-5 gap-5  flex-wrap ">
      {filteredNotes.map((card, idx) => (
        <Card
          sx={{ maxWidth: { xs: 300, lg: 275 }, borderRadius: 2, boxShadow: 3 }}
          key={idx}
        >
          <CardContent className="flex justify-between items-center flex-col">
            <Box className="flex justify-between   gap-12 mb-1">
              <Typography
                gutterBottom
                sx={{
                  color: "black",
                  fontSize: 16,
                  fontWeight: 600,
                  marginBottom: 0,
                }}
              >
                {card.title}
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
                {card.description}
              </Typography>
              <Box className="flex  flex-col justify-start items-center gap-1 text-sm text-gray-500">
                <Box>{card.date},</Box>
                <Box>{card.time}</Box>
              </Box>
            </Box>

            <Stack direction="row" spacing={1}>
              {card.tags.map((chip, idx) => (
                <Chip label={`#${chip}`} key={idx} />
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
                onClick={() => ButtonOnclick(btn, card.id)}
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
