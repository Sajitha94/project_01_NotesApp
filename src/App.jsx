import { useState } from "react";
import "./App.css";
import HeaderPage from "./components/HeaderPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeaderPage />
    </>
  );
}

export default App;
