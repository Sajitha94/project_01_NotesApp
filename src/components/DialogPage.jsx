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
import { useNotes } from "./LocalStorageData";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveAsIcon from "@mui/icons-material/SaveAs";
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

function DialogPage() {
  const {
    notes,
    setNotes,
    open,
    handleClose,
    editNoteId,
    tagsData,
    setTagsData,
  } = useNotes();

  const noteToEdit = notes.find((notes) => notes.id === editNoteId);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title");
    const description = formData.get("description");
    const tagInput = formData.get("tags");
    const tags = tagInput.split(",").map((item) => item.trim());
    const dateTimeString = new Date();
    const [date, time] = dateTimeString.toLocaleString().split(",");

    if (noteToEdit) {
      const UpdateNote = notes.map((item) =>
        item.id === editNoteId
          ? { ...item, title, description, tags, date, time }
          : item
      );
      setNotes(UpdateNote);
    } else {
      const pinned = false;
      const archived = false;
      const trashed = false;
      const id = Math.floor(Math.random() * 3) + Date.now();
      const newNote = {
        id,
        title,
        description,
        tags,
        date,
        time,
        pinned,
        archived,
        trashed,
      };
      setNotes([...notes, newNote]);
    }

    const allTags = [...new Set([...tagsData, ...tags])];
    setTagsData(allTags);
    console.log(allTags, "allTags");
    handleClose();
  };

  return (
    <Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{noteToEdit ? "Edit Note" : "Add New"}</DialogTitle>
        <DialogContent dividers>
          <form id="add-form" onSubmit={handleSubmit}>
            <TextField
              name="title"
              placeholder="Title"
              variant="outlined"
              fullWidth
              defaultValue={noteToEdit ? noteToEdit.title : ""}
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
              defaultValue={noteToEdit ? noteToEdit.description : ""}
            />

            <TextField
              name="tags"
              placeholder="Tags - comma separated (e.g. personal, work, office)"
              variant="outlined"
              fullWidth
              defaultValue={noteToEdit ? noteToEdit.tags.join(", ") : ""}
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
                  gap: 0.5,
                }}
              >
                <CancelIcon sx={{ width: 20, height: 20 }} />
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
                  gap: 0.5,
                }}
              >
                {noteToEdit ? (
                  <SaveAsIcon sx={{ width: 20, height: 20 }} />
                ) : (
                  <SaveIcon sx={{ width: 20, height: 20 }} />
                )}
                {noteToEdit ? "Upadate" : "Save"}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default DialogPage;
