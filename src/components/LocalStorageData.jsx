import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";

const LocalStorageContext = createContext();

export function LocalStorageProvider({ children }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storeNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storeNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <LocalStorageContext.Provider value={{ notes, setNotes }}>
      {children}
    </LocalStorageContext.Provider>
  );
}

export const useNotes = () => useContext(LocalStorageContext);
