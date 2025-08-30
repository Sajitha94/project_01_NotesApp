import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";

const LocalStorageContext = createContext();

export function LocalStorageProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [tagsData, setTagsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [editNoteId, setEditNoteId] = useState(null);
  const [activeTag, setActiveTag] = useState("Notes");
  const [viewOnly, setViewOnly] = useState(false);

  const handleClickOpen = (id = null, viewOnly = false) => {
    setEditNoteId(id);
    setOpen(true);
    setViewOnly(viewOnly);
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
      pinned: false,
      archived: false,
      trashed: false,
      date: date,
      time: time,
    },
  ];

  useEffect(() => {
    const storeNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const storedTags = JSON.parse(localStorage.getItem("Tags")) || [];

    if (storeNotes.length === 0) {
      setTagsData(defaultNotes[0].tags);
      setNotes(defaultNotes);

      localStorage.setItem("notes", JSON.stringify(defaultNotes));
      localStorage.setItem("Tags", JSON.stringify(tagsData));
    } else {
      setNotes(storeNotes);
      setTagsData(storedTags);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("Tags", JSON.stringify(tagsData));
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
        activeTag,
        setActiveTag,
        tagsData,
        setTagsData,
        searchTerm,
        setSearchTerm,
        viewOnly,
        setViewOnly,
      }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
}

export const useNotes = () => useContext(LocalStorageContext);
