import { useState } from "react";
import "./App.css";
import HeaderPage from "./components/HeaderPage";
import SearchPage from "./components/SearchPage";
import TagsPage from "./components/TagsPage";
import CardPage from "./components/CardPage";
import DialogPage from "./components/DialogPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeaderPage />
      <SearchPage />
      <TagsPage />
      <CardPage />
    </>
  );
}

export default App;
