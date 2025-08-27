import { useState } from "react";
import "./App.css";
import HeaderPage from "./components/HeaderPage";
import SearchPage from "./components/SearchPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeaderPage />
      <SearchPage />
    </>
  );
}

export default App;
