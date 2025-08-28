import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LocalStorageProvider } from "./components/LocalStorageData.jsx";

createRoot(document.getElementById("root")).render(
  <LocalStorageProvider>
    <App />
  </LocalStorageProvider>
);
