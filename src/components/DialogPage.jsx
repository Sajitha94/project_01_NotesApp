import React from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
  width: "100%",
  marginTop: "20px",
  marginBottom: "20px",
  padding: "10px",
  border: "2px solid #ccc",
  borderRadius: "8px",
  fontFamily: "inherit",
  fontSize: "14px",
  "&:hover": {
    border: "2px solid #b39ddb",
  },
  "&:focus": {
    border: "2px solid #d1c4e9",
    outline: "none",
  },
}));

function DialogPage({ open, handleClose }) {
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title");
    const description = formData.get("description");
    const tags = formData.get("tags");
    const dateTimeString = new Date();
    const [date, time] = dateTimeString.toLocaleString().split(",");
    const newNote = { title, description, tags, date, time };

    const existingNotes = JSON.parse(localStorage.getItem("notes")) || [];
    existingNotes.push(newNote);
    localStorage.setItem("notes", JSON.stringify(existingNotes));

    handleClose();
  };
  return (
    <Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New</DialogTitle>
        <DialogContent dividers>
          <form id="add-form" onSubmit={handleSubmit}>
            <TextField
              name="title"
              placeholder="Title"
              variant="outlined"
              fullWidth
              sx={{
                borderRadius: "5px",
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { border: "2px solid #d1c4e9" },
                  "&.Mui-focused fieldset": { border: "2px solid #d1c4e9" },
                },
                "& .MuiInputLabel-root": {
                  color: "#7e57c2",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#5e35b1",
                },
              }}
            />

            <StyledTextarea
              name="description"
              maxRows={10}
              minRows={4}
              aria-label="description"
              placeholder="Write your note here..."
            />

            <TextField
              name="tags"
              placeholder="Tags - comma separated (e.g. personal, work, office)"
              variant="outlined"
              fullWidth
              sx={{
                borderRadius: "5px",
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": { border: "2px solid #d1c4e9" },
                  "&.Mui-focused fieldset": { border: "2px solid #d1c4e9" },
                },
                "& .MuiInputLabel-root": {
                  color: "#7e57c2",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#5e35b1",
                },
              }}
            />
            <DialogActions>
              <Button
                onClick={handleClose}
                sx={{
                  color: "red",
                  borderColor: "red",
                  border: "1px solid #d1c4e9",
                  textTransform: "none",
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                form="add-form"
                sx={{
                  color: "red",
                  color: "#9575cd",
                  border: "1px solid #d1c4e9",
                  textTransform: "none",
                }}
              >
                Save
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default DialogPage;
