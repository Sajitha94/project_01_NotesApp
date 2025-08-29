import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";

const LocalStorageContext = createContext();

export function LocalStorageProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [open, setOpen] = useState(false);
  const [editNoteId, setEditNoteId] = useState(null);

  const handleClickOpen = (id = null) => {
    setEditNoteId(id);
    setOpen(true);
  };
  const handleClose = () => {
    setEditNoteId(null);
    setOpen(false);
  };
  const dateTimeString = new Date();
  const [date, time] = dateTimeString.toLocaleString().split(",");
  const defaultNotes = [
    {
      id: 1,
      title: "Welcome to Notes",
      description:
        "This is an example note. Use the + button to create notes, add tags (comma separated), and try pinning/archiving/trashing.",
      tags: ["welcome", "example"],
      pinned: true,
      archived: false,
      trashed: false,
      date: date,
      time: time,
    },
  ];

  useEffect(() => {
    const storeNotes = JSON.parse(localStorage.getItem("notes")) || [];
    if (storeNotes.length === 0) {
      setNotes(defaultNotes);
      localStorage.setItem("notes", JSON.stringify(defaultNotes));
    } else {
      setNotes(storeNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <LocalStorageContext.Provider
      value={{
        notes,
        setNotes,
        handleClickOpen,
        handleClose,
        open,
        setEditNoteId,
        editNoteId,
      }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
}

export const useNotes = () => useContext(LocalStorageContext);
