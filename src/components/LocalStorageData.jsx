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

  useEffect(() => {
    const storeNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storeNotes);
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
